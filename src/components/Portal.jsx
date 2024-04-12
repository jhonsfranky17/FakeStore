import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  return createPortal(children, document.getElementById("overlay"));
};

export default Portal;
