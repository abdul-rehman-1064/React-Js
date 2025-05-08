import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setnumber] = useState(false);
  const [chara, setchara] = useState(false);
  const [Password, setpassword] = useState();

  const password = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (chara) {
      str += "!@#$%^&*()_<>{}?|";
    }

    for (let i = 1; i < length; i++) {
      let getChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(getChar);
    }

    setpassword(pass);
  }, [number, length, chara]);

  useEffect(() => {
    password();
  }, [length, chara, number, password]);

  const getcopy = useRef(null);

  const getCopiedcode = useCallback(() => {
    getcopy.current?.select();
    // getcopy.current?.setSelectionRange(0,12)
    // window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <>
      <div className="text-white text-3xl text-center my-20">
        PASSWORD GENERATOR
      </div>
      <div
        id="set"
        className=" bg-gray-600 text-center absolute left-1/3 rounded-md py-14 flex"
      >
        <div className="-my-8 ">
          <input
            className="w-72 mx-16 py-2 text-center rounded-md outline-none"
            type="text"
            placeholder="Password"
            value={Password}
            ref={getcopy}
            readOnly
          />
          <button
            className="w-16 py-1 bg-gray-700 border-2 border-black rounded-md text-white"
            onClick={getCopiedcode}
          >
            Copy
          </button>
        </div>

        <div className="absolute my-8 mx-3 flex ">
          <div className=" ">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white -my-1 mx-3"> length : {length}</label>
          </div>
          <div className="mx-6">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setnumber((set) => !set);
              }}
            />
            <label className="text-white  -my-1 mx-1">Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={chara}
              onChange={() => {
                setchara((set) => !set);
              }}
            />
            <label className="text-white  -my-1 mx-1">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// useCallback points ko memorize krta hai complete be kr skta hai ya half be cache memroy mein save kr lyta hai
// useEffect jb be humara page load hota hai too sub se pehle call hota hai aur agar dependencies mein se koi be change howi to yeh dubara load ho jata hai
