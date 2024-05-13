import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="px-2 py-2 flex justify-between border-b">
      <div className="flex gap-2 items-center">
        <img src="/icon.svg" alt="logo" className="w-7 h-7" />

        <h1 className="font-semibold">LogoMaker</h1>
      </div>

      <Button>Download</Button>
    </div>
  );
};

export default Header;
