import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <div className="w-dvw min-h-dvh p-4 flex flex-col gap-5">
      <Navbar />
      {children}
    </div>
  );
};

export default Page;
