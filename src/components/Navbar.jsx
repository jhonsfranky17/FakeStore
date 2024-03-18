import Brand from "./Brand";
import Button from "./Button";
import IconButton from "./IconButton";
import { IoSearch, IoPerson, IoBagAdd, IoBag } from "react-icons/io5";

const Navbar = () => {
  const NAV_ITEMS = ["Shop All", "New", "Sale", "Reviews", "About Us"];

  return (
    <div className="p-3 flex items-center justify-between border-b">
      <Brand />
      <div className="flex items-center justify-between gap-3">
        {NAV_ITEMS.map((navItem) => (
          <h2 className="text-slate-500 hover:text-primary-400 cursor-pointer hover:underline">
            {navItem}
          </h2>
        ))}
      </div>
      <div className="flex items-center">
        <IconButton>
          <IoSearch />
        </IconButton>
        <IconButton>
          <IoPerson />
        </IconButton>
        <Button icon={<IoBag />} variant="text">
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
