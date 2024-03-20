const Card = ({ children }) => {
  return (
    <div className="rounded-md border bg-transparent p-3 flex flex-col justify-between gap-3 shadow-md">
      {children}
    </div>
  );
};

export default Card;
