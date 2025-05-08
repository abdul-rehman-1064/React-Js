import { useState } from "react";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Crad"

function App() {
    const [themeMode,setThemeMode] = useState("light");

    const lightheme = ()=>{
      setThemeMode("light");
    }

    const darktheme = ()=>{
      setThemeMode("dark");
    }

    useEffect (()=>{
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
    },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darktheme,lightheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
