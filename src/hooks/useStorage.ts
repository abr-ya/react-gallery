import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../services/fire";

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // references
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(prog);
      },
      (error) => {
        console.log(error);
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
