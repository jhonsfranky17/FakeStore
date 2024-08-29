const IconButton = ({ children }) => {
  return (
    <div className="p-3 rounded-full hover:bg-primary-100 cursor-pointer">
      {children}
    </div>
  );
};

export default IconButton;
