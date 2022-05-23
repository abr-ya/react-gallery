import { FormEvent, useState } from "react";
import FileLoader from "./FileLoader";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const imgTypes = ["image/png", "image/jpeg"];

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (e && e.target?.files[0]) {
      const target = e.target as HTMLInputElement;
      const selected: File = target.files[0];
      console.log(selected);

      if (selected && imgTypes.includes(selected.type)) {
        setFile(selected);
        setError("");
      } else {
        setFile(null);
        setError("Please select an image file (png or jpg)");
      }
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{`Выбран файл: ${file.name}`}</div>}
        {file && <FileLoader file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
