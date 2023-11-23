import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const currentActive = navLinks.find((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.clientHeight;
          return window.scrollY >= top && window.scrollY < bottom;
        }
        return false;
      });

      if (currentActive && active !== currentActive.id) {
        setActive(currentActive.id);
        console.log(currentActive);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <motion.div
      className="bg-[#091b29] w-screen fixed h-[80px] z-50 rounded-b-[35px] text-[19px] flex flex-row items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link
        to="/"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <button className="flex justify-start items-start ml-12">CHET</button>
      </Link>

      <ul className="list-none flex justify-end text-white items-end flex-row gap-[40px] mr-12">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`hover:text-[#65f5ff] duration-[500ms] ${
              active === nav.id ? "text-[#65f5ff]" : "text-white"
            }`}
            onClick={() => {
              setActive(nav.id);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavBar;
