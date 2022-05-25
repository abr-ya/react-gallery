import ImageGrid from "components/ImageGrid";
import Title from "components/Title";
import UploadForm from "components/UploadForm";
import { FC } from "react";

const Gallery: FC = () => (
  <div className="App">
    <Title />
    <UploadForm />
    <ImageGrid />
  </div>
);

export default Gallery;
