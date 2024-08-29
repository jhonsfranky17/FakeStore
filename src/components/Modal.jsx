import Portal from "./Portal";

const Modal = ({ children }) => {
  return (
    <Portal>
      <div className="w-1/2 bg-white rounded-md p-10">{children}</div>
    </Portal>
  );
};

export default Modal;
