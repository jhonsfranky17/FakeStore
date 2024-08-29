const Input = ({ type = "text", onChange, value, config }) => {
  return (
    <input
      {...config}
      className="p-2 border outline-none"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
