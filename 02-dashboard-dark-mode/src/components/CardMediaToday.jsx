/* eslint-disable react/prop-types */
import logoFacebook from "../images/icon-facebook.svg";
import logoInstagram from "../images/icon-instagram.svg";
import logoTwitter from "../images/icon-twitter.svg";
import logoYouTube from "../images/icon-youtube.svg";
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";
import { useState, useEffect } from "react";

export function CardMediaToday({ data }) {
  const { name, views, action, porcentaje } = data;
  const [logo, setLogo] = useState("");
  const [arrow, setArrow] = useState("");
  const [colorArrow, setColorArrow] = useState("");

  useEffect(() => {
    if (porcentaje < 0) {
      setArrow(arrowDown);
      setColorArrow("text-Bright-Red");
    } else {
      setArrow(arrowUp);
      setColorArrow("text-Lime-Green");
    }
    if (name === "Facebook") {
      setLogo(logoFacebook);
      return;
    }
    if (name === "Instagram") {
      setLogo(logoInstagram);
      return;
    }
    if (name === "Twitter") {
      setLogo(logoTwitter);
      return;
    }

    setLogo(logoYouTube);
  }, []);

  return (
    <div className="flex flex-col w-80 bg-slate-200 dark:bg-Dark-Desaturated-Blue rounded-lg p-8 xl:w-64">
      <div className="flex justify-between items-center mb-4 ">
        <h4 className="text-slate-500 dark:text-Desaturated-Blue font-bold text-xl">
          {action}
        </h4>
        <img className=" object-cover h-6 w-6" src={logo} alt="" />
      </div>
      <div className="flex justify-between items-end">
        <h3 className="dark:text-white text-4xl font-extrabold">{views}</h3>
        <div className="flex items-center">
          <img className="h-2 w-2 mr-2" src={arrow} alt="Icono flecha arriba" />
          <p className={`${colorArrow} font-semibold`}>
            {Math.abs(porcentaje)} %
          </p>
        </div>
      </div>
    </div>
  );
}
