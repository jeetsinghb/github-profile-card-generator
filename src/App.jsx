import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  function themeSwitcher() {
    setTheme((prevState) => !prevState);
  }

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, themeSwitcher }}>
        <Header />
        <Main />
      </ThemeContext.Provider>
      <Footer />
    </>
  );
};

export default App;
