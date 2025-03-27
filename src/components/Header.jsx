import { useContext } from "react";
import { ThemeContext } from "../App";
import { LightIcon } from "../icons/LightIcon";
import { DarkIcon } from "../icons/DarkIcon";

const Header = () => {
  const { theme, themeSwitcher } = useContext(ThemeContext);

  return (
    <header className="bg-[#ffffff] py-3">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <h1 className="text-center text-[1.1rem]">
          Github Profile Card Generator
        </h1>
        <button className="cursor-pointer" onClick={themeSwitcher}>
          {theme ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
