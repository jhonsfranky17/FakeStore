import { FaSpinner } from "react-icons/fa";
import Portal from "./Portal";

const Spinner = () => {
  return (
    <Portal>
      <div className="w-screen h-screen fixed flex justify-center items-center z-50 bg-black opacity-80">
        <FaSpinner className="text-primary-500 animate-spin" size={50} />
      </div>
    </Portal>
  );
};

export default Spinner;
