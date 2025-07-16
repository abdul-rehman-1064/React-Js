import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";
import { auth } from "../../../fireBase/fireBase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import SideMenu from "../SideMenu";

function MainBox() {
  const authStatus = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [imageUrl, setImageUrl] = useState(authStatus?.photoURL || "");

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main flex-1 justify-between h-screen relative">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center max-w-full p-2 mt-1 text-white shadow-lg border-dashed border-b-2 border-gray-800 z-10 relative bg-black">
        <div className="logo ml-4 hidden lg:flex">
          <h1 className="text-white text-2xl font-semibold">
            Welcome to{" "}
            <span className="text-[#00d8d8] font-bold">INVOICELY!</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            childrenText="Logout"
            onClick={logoutUser}
            className="lg:mr-7 lg:ml-0 ml-6"
          />

          <div className="lg:hidden ml-72">
            {isOpen ? (
              <HiMenuAlt1
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <HiMenuAlt3
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* SideMenu */}
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="text-white bg-[#000000] h-[90%] w-full shadow-lg p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default MainBox;

