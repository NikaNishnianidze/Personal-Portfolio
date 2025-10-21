import { useState } from "react";
import hamburger from "/public/assets/hamburger.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<string>("Home");

  return (
    <>
      <div className="mb:block tb:hidden dk:hidden mobile-nav mb:flex mb:justify-between mb:items-center">
        <h1 className="text-[30px] text-white font-bold cursor-pointer">
          NicK
        </h1>
        <div className="menu">
          <img
            src={hamburger}
            alt="hamburger icon"
            className="w-[30px] h-[24px] cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
        {menuOpen && (
          <div
            className={`bg-[#1f0016] w-[300px] h-full fixed z-2 right-0 bottom-0 top-0 p-8 flex flex-col gap-[20px] transform transition-transform duration-500  ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h1
              className="text-right w-full text-white text-[26px] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              X
            </h1>
            <ul className="flex flex-col gap-[15px] justify-center text-white text-[20px] hover:text-gray">
              <li>
                <a
                  href="#home"
                  className={`hover:text-blue-500 ${
                    chosen === "Home" ? "underline" : ""
                  }`}
                  onClick={() => setChosen("Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`hover:text-blue-500 ${
                    chosen === "about" ? "underline" : ""
                  }`}
                  onClick={() => setChosen("about")}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-blue-500 ${
                    chosen === "services" ? "underline" : ""
                  }`}
                  onClick={() => setChosen("services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-blue-500 ${
                    chosen === "portfolio" ? "underline" : ""
                  }`}
                  onClick={() => setChosen("portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-blue-500 ${
                    chosen === "contact" ? "underline" : ""
                  }`}
                  onClick={() => setChosen("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="tablet+-nav mb:hidden tb:block dk:block tb:flex tb:flex-row tb:justify-between tb:items-center dk:flex dk:flex-row dk:justify-between dk:items-center">
        <div className="logo">
          <h1 className="text-[35px] text-white font-bold cursor-pointer">
            NicK
          </h1>
        </div>
        <div className="nav-lists">
          <ul className="flex gap-[22px] justify-center text-white text-[16px] hover:text-gray">
            <li>
              <a
                href="#home"
                className={`hover:text-blue-500 ${
                  chosen === "Home" ? "underline" : ""
                }`}
                onClick={() => setChosen("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:text-blue-500 ${
                  chosen === "about" ? "underline" : ""
                }`}
                onClick={() => setChosen("about")}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-blue-500 ${
                  chosen === "services" ? "underline" : ""
                }`}
                onClick={() => setChosen("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-blue-500 ${
                  chosen === "portfolio" ? "underline" : ""
                }`}
                onClick={() => setChosen("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-blue-500 ${
                  chosen === "contact" ? "underline" : ""
                }`}
                onClick={() => setChosen("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="connect-with-me flex">
          <button
            className="connect-button w-[162px] h-[50px] py-[15px] text-center text-[16px] rounded-[50px] cursor-pointer text-white bg-blue-600 
               transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
          >
            Connect With Me
          </button>
        </div>
      </div>
    </>
  );
}
