const Chip = ({ children }) => {
  return (
    <div className="px-3 py-1 text-center bg-emerald-500 rounded-md max-w-fit">
      <h1 className="text-emerald-50 text-sm">{children}</h1>
    </div>
  );
};

export default Chip;
