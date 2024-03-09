import { useEffect } from "react";
import { useState } from "react";

export const InfoMedia = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="m-4 xl:flex xl:justify-between items-center">
      <div className="border-b border-Desaturated-Blue pb-2 xl:border-none">
        <h2 className="text-2xl font-semibold dark:text-white">
          Social Media Dashboard
        </h2>
        <h4 className="text-sm font-semibold dark:text-Desaturated-Blue ">
          Total Followers: 23,004
        </h4>
      </div>
      <div className="pt-2 flex justify-between">
        <h4 className="text-sm font-semibold dark:text-Desaturated-Blue">
          Dark Mode
        </h4>
        <div
          onClick={handleChangeTheme}
          className=" flex  bg-gradient-to-r bg-slate-400 dark:justify-end dark:from-Toggle-From dark:to-Toggle-To w-10 h-5 rounded-3xl items-center cursor-pointer xl:ml-4"
        >
          <div className=" bg-white dark:bg-Dark-Desaturated-Blue w-[40%] h-[75%] rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};
