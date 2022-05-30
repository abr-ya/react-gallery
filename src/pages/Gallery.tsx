import ImageGrid from "components/ImageGrid";
import Modal from "components/Modal";
import Title from "components/Title";
import UploadForm from "components/UploadForm";
import { FC, useState } from "react";

const Gallery: FC = () => {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
