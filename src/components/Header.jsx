import { useContext } from "react";
import { ThemeContext } from "../App";
import { LightIcon } from "../icons/LightIcon";
import { DarkIcon } from "../icons/DarkIcon";

const Header = () => {
  const { theme, themeSwitcher } = useContext(ThemeContext);

  return (
    <header className="py-3 border-b">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <h1 className="text-center text-[1.1rem]">Github Profile Card Maker</h1>
        <button
          onClick={themeSwitcher}
          aria-label="Toggle theme"
          aria-pressed={theme ? "true" : "false"}
        >
          {theme ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
