import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import CardNew from "./CardNew";

export default function HomeGrid() {
  return (
    <section className="mt-4 grid grid-cols-1 grid-rows-6 bg-slate-400 gap-4">
      <div className="bg-purple-400">
        <img src={imageMobile} alt="imagen de puzzle" />
      </div>
      <div className="bg-purple-400 h-auto">
        <h2 className="text-5xl font-bold">The Bright Future of Web 3.0?</h2>
        <div>
          <p className="text-lg text-neutral-dark-grayish-blue my-4">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-[50%] bg-primary-soft-red p-3 uppercase text-white font-semibold tracking-[.3em]">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-purple-400 row-span-2 p-5 flex flex-col h-[80%] self-center">
        <h3 className="text-primary-soft-orange font-bold text-4xl h-[10%]">
          New
        </h3>
        <div className="h-[90%] flex flex-col justify-between">
          <div className="h-[33%] py-6">
            <h3 className="text-2xl text-white font-bold">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-white text-lg">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="h-[33%] py-6 border-y">
            <h3 className="text-2xl text-white font-bold">
              The Downsides of AI Artistry
            </h3>
            <p className="text-white text-lg">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="h-[33%] py-6">
            <h3 className="text-2xl text-white font-bold">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-white text-lg">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-purple-400 row-span-2  flex flex-col h-[80%] justify-between">
        <CardNew />
        <CardNew />
        <CardNew />
      </div>
    </section>
  );
}
