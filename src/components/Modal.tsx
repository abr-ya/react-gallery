import { motion } from "framer-motion";

interface IModal {
  selectedImg: string;
  setSelectedImg: (img: string) => void;
}

const Modal = ({ setSelectedImg, selectedImg }: IModal) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      console.log("backdrop click!");
      setSelectedImg("");
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {selectedImg && (
        <motion.img
          src={selectedImg}
          alt="enlarged pic"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      )}
    </motion.div>
  );
};

export default Modal;
