import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { imgSubscribe } from "services/fire";

const ImageGrid = () => {
  console.log("ImageGrid render");
  const [images, setImages] = useState([]);

  useEffect(() => {
    imgSubscribe((images: any) => {
      console.log(images, "(ImageGrid useEffect)");
      setImages(images);
    });
  }, []);

  return (
    <div className="img-grid">
      {images &&
        images.map((img) => (
          <motion.div
            className="img-wrap"
            key={img.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => console.log("img_click")}
          >
            <motion.img
              src={img.link}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
