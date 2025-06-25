import React ,{useEffect}from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

function DarkMode() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;
    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
            element.classList.remove('light');
        } else {
            element.classList.add('light');
            element.classList.remove('dark');
        }
    }, [theme]); 

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

  return (
    theme === 'dark' ?
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <BiSolidSun className="text-white text-2xl " />
        </div>
      :
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <BiSolidMoon className="text-black text-2xl" />
        </div>
  )
}

export default DarkMode