import React from "react";
import logo from "../assets/Images/nuclear-logo.jpg";
import { Link, Outlet } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Footer from "./Footer";

function Header() {
  const DropdownLinks = [
    {
      name: "Quiz",
      link: "/quiz",
    },
    {
      name: "Calculate Energy",
      link: "/calculate",
    },
  ];

  return (
    <>
      <header className="-top-0 sticky z-50 bg-white p-4 font-medium text-black shadow-[0_2px_4px_rgba(81,107,152,0.3)] font-family: 'Helvetica Neue', system-ui, Roboto, Arial, sans-serif ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-16 ml-20">
            <img
              src={logo}
              alt="Logo"
            />
          </div>
          <nav>
            <ul className="flex space-x-6 mr-20">
              <li>
                <Link to="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/event" className="hover:text-yellow-500">
                  Event
                </Link>
              </li>
              <li>
                <Link to="/world" className="hover:text-yellow-500">
                  World
                </Link>
              </li>
              <li>
                <Link to="/ethiopia" className="hover:text-yellow-500">
                  Ethiopia
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link to="/quiz" className="flex  items-center gap-[2px]">
                  Other{" "}
                </Link>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <Link
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          to={data.link}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/faq" className="hover:text-yellow-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
