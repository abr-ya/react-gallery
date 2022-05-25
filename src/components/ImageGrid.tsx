import { useEffect, useState } from "react";
import { imgSubscribe } from "services/fire";

const ImageGrid = () => {
  console.log("ImageGrid render");
  const [images, setImages] = useState([]);

  useEffect(() => {
    imgSubscribe((images: any) => {
      console.log(images, "(component)");
      setImages(images);
    });
  }, []);

  return <div className="img-grid">images {images.length}</div>;
};

export default ImageGrid;
