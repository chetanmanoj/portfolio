import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const CaroItem = ({ item }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });
  if (!isMobile) {
    return (
      <motion.button
        whileHover={{ boxShadow: "0px 0px 15px rgb(101,245,255)", scale: 1.02 }}
        className="rounded-xl"
      >
        <motion.div
          className="flex flex-col h-[14.7rem] overflow-hidden w-[25rem] border-4 border-solid border-[#65f5ff] rounded-lg p-2 text-center items-center"
          onClick={() => window.open(item.gitlink)}
          whileHover={{ height: "24rem", transition: { duration: 0.5 } }}
        >
          <div className="h-8/12">
            <img src={item.image} className="bg-black h-8/12 rounded-md" />
          </div>

          <div className="font-bold text-[2rem] mt-2">{item.title}</div>
          <div className="w-11/12 text-[#65f5ff]">{item.description}</div>
        </motion.div>
      </motion.button>
    );
  } else {
    return (
      <button className="rounded-xl">
        <div
          className="flex flex-col h-[20.3rem] overflow-hidden gap-5 w-[20rem] border-4 border-solid border-[#65f5ff] rounded-lg p-2 text-center items-center"
          onClick={() => window.open(item.gitlink)}
        >
          <div className="h-8/12">
            <img src={item.image} className="bg-black rounded-md" />
          </div>

          {/* <div className="font-bold text-[2rem] mt-2">{item.title}</div> */}
          <div className="w-11/12 text-[#65f5ff] text-left">
            {item.description}
          </div>
        </div>
      </button>
    );
  }
};

export default CaroItem;
