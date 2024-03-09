/* eslint-disable react/prop-types */
import logoFacebook from "../images/icon-facebook.svg";
import logoInstagram from "../images/icon-instagram.svg";
import logoTwitter from "../images/icon-twitter.svg";
import logoYouTube from "../images/icon-youtube.svg";
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";
import { useState, useEffect } from "react";

export const CardMedia = ({ username, followers, newFollowers, name }) => {
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("");
  const [arrow, setArrow] = useState("");
  const [colorArrow, setColorArrow] = useState("");

  useEffect(() => {
    if (newFollowers < 0) {
      setArrow(arrowDown);
      setColorArrow("text-Bright-Red");
    } else {
      setArrow(arrowUp);
      setColorArrow("text-Lime-Green");
    }
    if (name === "Facebook") {
      setLogo(logoFacebook);
      setColor(`border-${name}`);
      return;
    }
    if (name === "Instagram") {
      setLogo(logoInstagram);
      setColor(`border-pink-500`);
      return;
    }
    if (name === "Twitter") {
      setLogo(logoTwitter);
      setColor(`border-Twitter`);
      return;
    }

    setLogo(logoYouTube);
    setColor(`border-YouTube`);
  }, []);

  return (
    <div
      className={`flex flex-col h-50 w-96 border-t-2 ${color} rounded-md justify-center items-center bg-slate-200 dark:bg-Dark-Desaturated-Blue py-5 text-center xl:w-64`}
    >
      <div className="text-slate-600 dark:text-Desaturated-Blue flex font-semibold">
        <img className="mr-3 object-cover h-6 w-6" src={logo} alt="" />
        {username}
      </div>
      <h2 className="dark:text-white text-6xl font-bold mt-4">{followers}</h2>
      <p className="text-slate-600 dark:text-Desaturated-Blue mb-4 uppercase tracking-[0.3em]">
        Followers
      </p>
      <div className="flex items-center">
        <img className="h-2 w-2 mr-2" src={arrow} alt="Icono flecha arriba" />
        <p className={`${colorArrow} font-semibold`}>
          {Math.abs(newFollowers)} Today
        </p>
      </div>
    </div>
  );
};
