import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../../../../utils/US.png";
import { motion } from "framer-motion";

function index() {
  return (
    <div className="w-full flex flex-col text-white py-5 m-0 p-0">
      <div className="flex items-center justify-center z-10 mx-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={Logo}
            className="h-[80px] w-[80px] rounded-full ml-0"
          />
        </motion.div>
        <div className="flex gap-5 ml-5 py-7 text-3xl">
          <div>
            <a
              href="https://linkedin.com/in/utkarsh-sharma-78a007259/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href="https://github.com/utkarsh51103" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/utkarsh511_/" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="https://x.com/Utkarsh51103" target="_blank">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center font-thin z-20 justify-center gap-2">
        <div>Developed by - Utkarsh Sharma</div>
        <div>&copy; All rights Reserved</div>
      </div>
    </div>
  );
}

export default index;
