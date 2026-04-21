import React from "react";
import logo from "../../assets/img/logo.png";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MyLink from "../navbar/MyLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center py-4 container mx-auto">
        {/* Image from Local Files  */}

        <Image src={logo} alt="Website Logo" className="w-10"></Image>

        {/* Image from external source */}
        {/* <Image
          src={
            "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          }
          width={60}
          height={60}
          alt="Website Logo"
        ></Image> */}
        <ul className="flex justify-between gap-6 items-center">
          {navItems.map((item, index) => (
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>
        <button className="btn bg-purple-500 flex items-center justify-center text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
