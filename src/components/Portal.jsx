import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  return createPortal(
    <div className="w-screen h-screen fixed flex justify-center items-center z-50 bg-black opacity-80">
      {children}
    </div>,
    document.getElementById("overlay")
  );
};

export default Portal;
