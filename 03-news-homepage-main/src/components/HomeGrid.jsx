import { useState } from "react";
import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";
import CardNew from "./CardNew";
// import { useEffect } from "react";

export default function HomeGrid() {
  const [pantalla, setPantalla] = useState(window.screen.width);

  const start = () => {
    setPantalla(document.documentElement.clientWidth);
  };
  window.onresize = start;

  // useEffect(() => {
  //   // console.log(start());
  //   console.log(pantalla);
  // }, [pantalla]);

  return (
    <section className="my-4 grid grid-cols-1 grid-rows-6 gap-6 md:grid-cols-2 md:grid-rows-[380px_230px_280px_280px] xl:grid-cols-3 xl:grid-rows-[380px_260px_170px]">
      <div className=" h-[380px] md:col-span-2 xl:col-span-2 ">
        <img
          className="h-[100%] w-[100%]"
          src={pantalla > 770 ? imageDesktop : imageMobile}
          alt="imagen de puzzle"
        />
      </div>
      <div className="md:col-span-2 flex flex-col justify-between md:flex md:flex-row md:space-x-5 xl:flex xl:space-x-5 ">
        <h2 className="text-5xl font-bold xl:w-1/2 md:w-1/2 md:text-7xl xl:text-7xl">
          The Bright Future of Web 3.0?
        </h2>
        <div className=" xl:w-1/2 md:w-1/2 space-y-8 flex flex-col justify-between ">
          <p className="text-lg md:text-2xl text-neutral-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-[50%] bg-primary-soft-red p-3 uppercase text-white font-semibold tracking-[.3em] hover:bg-neutral-very-dark-blue ">
            Read More
          </button>
        </div>
      </div>
      <div className=" bg-neutral-very-dark-blue p-5 row-span-2 xl:col-start-3  xl:row-start-1 space-y-4">
        <h3 className="h-[10%] text-primary-soft-orange font-bold text-4xl">
          New
        </h3>
        <div className=" h-[90%] flex flex-col divide-y-2 space-y-10">
          <div className="h-1/3 pt-2">
            <h3 className="text-2xl text-white font-bold hover:text-primary-soft-orange hover:cursor-pointer">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-white text-lg ">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="h-1/3 pt-2">
            <h3 className="text-2xl text-white font-bold hover:text-primary-soft-orange hover:cursor-pointer">
              The Downsides of AI Artistry
            </h3>
            <p className="text-white text-lg ">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="h-1/3 pt-2">
            <h3 className="text-2xl text-white font-bold hover:text-primary-soft-orange hover:cursor-pointer">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-white text-lg ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className=" space-y-7 xl:flex row-span-2 xl:col-span-3 xl:row-span-1 xl:space-x-6 xl:space-y-0">
        <CardNew />
        <CardNew />
        <CardNew />
      </div>
    </section>
  );
}
