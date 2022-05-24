import useStorage from "hooks/useStorage";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const { progress } = useStorage(file);

  const imgTypes = ["image/png", "image/jpeg"];

  const handleChange = (event: HTMLInputEvent) => {
    const target = event.target;
    if (target && target.files) {
      const selected: File = target.files[0];
      console.log("selected file:", selected);

      if (selected && imgTypes.includes(selected.type)) {
        setFile(selected);
        setError("");
      } else {
        setFile(null);
        setError("Please select an image file (png or jpg)");
      }
    }
  };

  useEffect(() => {
    if (progress) {
      console.log("progress", progress);
    }
  }, [progress]);

  useEffect(() => {
    if (file) {
      console.log("file changed");
    }
  }, [file]);

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{`Выбран файл: ${file.name}`}</div>}
        {file && <ProgressBar progress={progress} />}
      </div>
    </form>
  );
};

export default UploadForm;
