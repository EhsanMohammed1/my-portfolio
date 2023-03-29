import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">My Skills</h1>
            <p className="mb-12 max-w-sm">
              i have experience in frontend development with{" "}
              <b>HTML, CSS, React,and JavaScript</b>. Those are important skills
              in the web development It's also impressive that you have some
              experience with backend development in <b>Golang</b>. That's a
              powerful language that is growing in popularity due to its
              efficiency and ease of use.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              contact me
            </Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-3 lg:gap-2"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/175/square_480/csslang.png"
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://www.andreapacchiarotti.it/archivio/html5.webp"
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg"
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="https://images.squarespace-cdn.com/content/v1/5df3d8c5d2be5962e4f87890/1627938869270-95JFU0YPSRRE8XU4TFGM/golang+icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
