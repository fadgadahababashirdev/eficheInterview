import React, { useState } from 'react';
import { PiArrowBendRightDownThin } from 'react-icons/pi';
import { FaFile } from 'react-icons/fa';
import { ImEyeBlocked } from 'react-icons/im';
import { CornerDownLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-between p-[2rem]">
      <div className="flex min-w-full justify-center">
        <div className="">
          <div className="mt-[2rem]">
            <img
              src="../arrowdown.svg"
              alt=""
              className="w-[6rem] ml-[-3rem]"
            />
          </div>
          <div className="flex mt-[4rem] gap-8 min-w-full justify-center items-center">
            <div>
              <FaFile className="text-[3.5rem] text-[#409C7C]" />
            </div>
            <div className="text-[4.5rem] font-bold">eFiche</div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center my-[2rem] para">
              Log into your account
            </h1>
          </div>
          <div>
            <label htmlFor="username">
              <h1 className="font-medium font-lg">
                Username<span className="text-red-500">*</span>
              </h1>
            </label>
            <input
              type="text"
              placeholder="user name"
              className="w-full p-4 rounded-md mt-2 border outline-none
             focus:border-[#409C7C] focus:ring-[1.3px] focus:ring-[#409C7C] "
              id="username"
            />
          </div>
          <div className="my-[2rem]">
            <label htmlFor="password">
              <h1 className="font-medium font-lg">
                Password<span className="text-red-500">*</span>
              </h1>
            </label>
            <div
              className="group flex justify-between w-full p-4 rounded-md mt-2 
                border border-gray-300 transition-all duration-200
                focus-within:border-[#409C7C] focus-within:ring-[1.3px] focus-within:ring-[#409C7C]"
            >
              <input
                type={`${showPassword ? 'text' : 'Password'}`}
                placeholder="Password"
                className="w-[80%] outline-none"
                id="password"
              />
              <div onClick={showPass}>
                <ImEyeBlocked className="black text-[1.5rem] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[4rem]">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-6 h-6 border-2 border-gray-300 rounded-lg appearance-none checked:bg-blue-500 checked:border-blue-500"
                id="rememberme"
              />
              <label htmlFor="rememberme">
                <span className="text-gray-500 font-medium cursor-pointer">
                  Remember Me
                </span>
              </label>
            </div>
            <span className="font-medium text-gray-500">Forgot Password</span>
          </div>
          <Link to="/role">
            <div className="my-[2rem]">
              <button className="w-full text-center p-3 bg-[#409C7C] rounded-xl text-white font-medium text-[1.3rem]">
                Login
              </button>
            </div>
          </Link>
          <div className="block md:flex gap-4 my-[4rem] text-[.9rem]">
            <div className="text-slate-400 text-center md:text-normal">
              &copy; 2024 eFiche.Alrights reserved.
            </div>
            <div className="text-center md:text-normal">
              Terms & Conditions Privacy Policy
            </div>
          </div>
        </div>

        <div className="w-[40rem] 2xl:w-[60rem] bg-green-400 rounded-2xl hidden md:flex justify-end relative ml-[4rem] mr-[-5rem] 2xl:ml-[20rem] overflow-hidden">
          <img
            src="../image.png"
            alt=""
            className="h-full w-full object-cover"
            style={{
              animation: 'zoomIn 15s forwards',
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute z-20 w-full h-full bg-[#3aa97f] opacity-50 top-0 rounded-3xl flex justify-center items-center"></div>
          <div className="top-0 absolute z-30 w-full h-full flex justify-center items-center">
            <div className="px-[.5rem]">
              <h1 className="text-[3rem] md:text-[1.5rem] xl:text-[2.5rem]  text-center text-white ">
                Streamlined and digitised <br /> medical experience
              </h1>
              <p className="text-center text-[1.1rem] md:text-[.8rem]  xl:text-[.9rem] font-thin text-white mt-[2rem] jakarta ">
                Enhanced data accessibility leads to improved <br />
                patient outcomes , increased efficiency , and more <br />
                effective reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
`;
document.head.appendChild(style);

export default Login;
