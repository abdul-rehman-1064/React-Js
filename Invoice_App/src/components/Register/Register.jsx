import React, { useState } from "react";
import Button from "../Button";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../fireBase/fireBase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../../../store/authSlice.js";
import { useDispatch } from "react-redux";
import { setDoc, doc } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selectFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
    console.log(URL.createObjectURL(selectedFile));
  };

  const submitHandler = (e) => {
    // setError("")
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("User created successfully:", user);

        updateProfile(userCredential.user, {
          displayName: username,
          photoURL: imageUrl,
        });

        // console.log(" updated User :", user);

        const userData = user;

        if (userData) dispatch(login(userData));

        console.log("sending to store : ", userData);

        setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          displayName: username,
          email: email,
          photoURL: imageUrl,
        });

        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error creating user:", error);
      });
  };

  return (
    <>
      <div className="bg-white lg:h-[500px] lg:w-[700px] h-[700px] w-[450px] flex-wrap  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
        <div className="flex  lg:flex-row flex-col items-center justify-center gap-2 h-full w-full">
          <div className="left text-white mr-[30px]">
            <Logo width="250px" />
          </div>
          <div className="right text-white mr-12">
            <h1 className="text-4xl font-bold mb-3">Welcome to Invoicely</h1>
            <p className="text-[#00d8d8] ml-12 text-xl font-bold mb-2">
              Sign up to create account
            </p>
            <p className="text-gray-600 ml-12 font-semibold mb-6">
              Already have an account?{" "}
              <span
                className="hover:underline  hover:text-gray-200 cursor-pointer text-white"
                onClick={() => navigate("/")}
              >
                {" "}
                Sign In
              </span>{" "}
            </p>
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              {/* {error?<p style={{color:'red'}}>{error}</p>:null} */}
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {imageUrl ? (
                <div className="flex items-center justify-evenly">
                  <img
                    src={imageUrl}
                    alt="Selected"
                    className="w-24 h-24 ml-12 object-cover rounded-full mb-4"
                  />
                  <Button
                    childrenText="Update Pic"
                    onClick={() => setImageUrl("")}
                    className="hover:bg-transparent hover:border-2 border-[#00d8d8] transition"
                  />
                </div>
              ) : (
                <input
                  type="file"
                  onChange={(e) => selectFile(e)}
                  required
                  className="px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              <Button
                childrenText="Create Account"
                className="hover:bg-transparent hover:border-2 border-[#00d8d8] transition"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
