import { Button } from "./ui/button";

interface HeaderProps {
  DownloadIcon: (date: any) => void;
}

const Header: React.FC<HeaderProps> = ({ DownloadIcon }) => {
  return (
    <div className="px-2 fixed top-0 backdrop-blur-lg py-2 flex justify-between border-b shadow-sm  w-full z-50 ">
      <div className="flex gap-2 items-center">
        <img src="/icon.svg" alt="logo" className="w-7 h-7" />

        <h1 className="font-semibold">LogoMaker</h1>
      </div>

      <Button onClick={() => DownloadIcon(Date.now())}>Download</Button>
    </div>
  );
};

export default Header;
