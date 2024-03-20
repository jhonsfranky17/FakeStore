import clsx from "clsx";

const Button = ({ children, variant = "contained", startIcon, endIcon }) => {
  const getButtonStyles = () => {
    return clsx("p-3 rounded-md ", {
      "bg-primary-500 text-primary-50 hover:bg-primary-600 active:bg-primary-700":
        variant === "contained",
      "border border-primary-500 text-primary-500 hover:bg-primary-100 active:bg-primary-400 active:text-primary-50":
        variant === "outlined",
      "bg-transparent hover:bg-primary-100 text-primary-500 active:bg-primary-200":
        variant === "text",
    });
  };

  return (
    <button className={getButtonStyles()}>
      <div className="flex justify-center items-center gap-3">
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </div>
    </button>
  );
};

export default Button;
