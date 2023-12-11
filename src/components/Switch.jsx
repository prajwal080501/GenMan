import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function Switch() {
  const [colorTheme, setColorTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === 'dark');

  const toggleDarkMode = checked => {
    // Assuming you have a function setTheme to set the theme
    setColorTheme(checked ? 'dark' : 'light');
    setDarkMode(checked);
  }

  return (
    <button 
      className="focus:outline-none"
      onClick={() => toggleDarkMode(!darkMode)}
    >
      {darkMode ? <SunIcon className="h-10 w-10 dark:text-white duration-200" /> : <MoonIcon className="h-8 w-8 dark:text-white duration-200" />}
    </button>

  );
}

export default Switch;
