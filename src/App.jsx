import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  function themeSwitcher() {
    setTheme((prevState) => !prevState);
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, themeSwitcher }}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
