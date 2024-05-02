import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import logo from './assets/airbnb.png'
export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between">
      <Link to={"/"} className="flex items-center gap-1">
        <img src={logo} className=" h-6 w-6"  alt="logo-img" />
        <span className="font-bold text-xl text-red-500">airbnb</span>
      </Link>
      <div className="flex md:flex-row md:items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div className="mb-2 md:mb-0 text-sm">Anywhere</div>
        <div className="border-l border-gray-300 md:hidden"></div>
        <div className="mb-2 md:mb-0 text-sm">Any week</div>
        <div className="border-l border-gray-300 md:hidden"></div>
        <div className="mb-2 md:mb-0 text-sm">Any Guests</div>
        <div className="border-l border-gray-300 md:hidden"></div>
        <div className="mb-2 md:mb-0">
          <button className="bg-primary flex items-center justify-center text-white p-1 rounded-full md:p-2 md:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  );
}
