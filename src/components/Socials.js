import React, { useContext } from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://web.facebook.com/ehsan.mhamad.5/" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com/ehsankurd286" target="_blank">
            <ImTwitter />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/ehsanmhamad/" target="_blank">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
