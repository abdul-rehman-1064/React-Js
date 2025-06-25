import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
      element.classList.remove('light');
    } else {
      element.classList.add('light');
      element.classList.remove('dark');
    }
  }, [theme]); // ✅ Dependency add ki

  return (
    <>
      <div className={`min-h-screen p-4 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
  <h1 className="text-2xl font-bold mb-4 ">Light And Dark Mode !</h1>

  {theme === 'dark' ? (
    <div
      className="w-10 h-10 bg-yellow-500 rounded-full flex justify-center items-center cursor-pointer"
      onClick={() => setTheme('light')}
    >
      <BiSolidMoon className="text-white text-2xl" />
    </div>
  ) : (
    <div
      className="w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer"
      onClick={() => setTheme('dark')}
    >
      <BiSolidSun className="text-white text-2xl" />
    </div>
  )}
</div>

    </>
  );
}

export default App;
