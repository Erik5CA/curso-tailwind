import Article from "./components/Article";
import Navbar from "./components/Navbar";
import ilusIntro from "./images/illustration-intro.svg";
import Button from "./components/Button";
import NumberArticle from "./components/NumberArticle";
import CardOpinion from "./components/CardOpinion";
import logoFacebook from "./images/icon-facebook.svg";
import logoInstagram from "./images/icon-instagram.svg";
import logoTwitter from "./images/icon-twitter.svg";
import logoPinterest from "./images/icon-pinterest.svg";
import logoYouTube from "./images/icon-youtube.svg";
import logo from "./images/logo.svg";
import bgTablet from "./images/bg-tablet-pattern.svg";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <section className="wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md:py-24">
          <img src={ilusIntro} alt="" className="w-full max-w-lg md:order-1" />

          <article className="text-center space-y-6 md:text-left md:space-y-8">
            <Article
              title={"Bring everyone together to build better products."}
              paraghrap={
                "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
              }
            />
            <div className="inline-block mx-auto">
              <Button>Get Started</Button>
            </div>
          </article>
        </section>
      </header>

      <figure className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={bgTablet}
          alt=""
          className="absolute w-full -z-10 -top-24 -right-24 max-w-2xl"
        />
      </figure>

      <main>
        <section className="wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left">
          <article className="space-y-4 md:space-y-6">
            <Article
              title={"What’s different about Manage?"}
              paraghrap={
                "Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."
              }
            />
          </article>
          <div className="grid gap-12">
            <NumberArticle
              number={"01"}
              title={"Track company-wide progress"}
              paragrahp={
                "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
              }
            />
            <NumberArticle
              number={"02"}
              title={"Advanced built-in reports"}
              paragrahp={
                "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
              }
            />
            <NumberArticle
              number={"03"}
              title={"Everything you need in one place"}
              paragrahp={
                "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
              }
            />
          </div>
        </section>

        <section className="wrapper text-center py-24 max-w-lg md:max-w-xl">
          <h2 className="text-3xl font-bold text-very-dark-blue md:text-4xl">
            What they’ve said
          </h2>
          <div className="mt-24 mb-12">
            <article className="bg-very-light-gray pt-16 pb-12 px-4 relative">
              <CardOpinion />
            </article>
          </div>
          <div className="inline-block mx-auto">
            <Button>Get Started</Button>
          </div>
        </section>

        <section className="bg-bright-red font-bold">
          <div className="wrapper py-24 text-center grid gap-6 md:grid-cols-[40%_40%] md:justify-between md:items-center md:text-left">
            <h2 className="text-4xl text-very-pale-red">
              Simplify how your team works today. Get Started
            </h2>
            <a
              href="#"
              className="button text-bright-red bg-very-pale-red mx-auto md:mx-0 md:justify-self-end"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-very-dark-blue py-24 ">
        <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch">
          <form
            action=""
            className="flex gap-4 min-w-[100px] w-full [grid-area:form]"
          >
            <input
              type="email"
              placeholder="Updates in your inbox.."
              className="min-w-[50px] flex-1 rounded-full px-4"
            />
            <input
              type="submit"
              value={"GO"}
              className="py-3 px-8 bg-bright-red rounded-full text-white"
            />
          </form>
          <nav className="grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </nav>
          <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">
            <a href="">
              <img src={logoFacebook} alt="#" className="w-8 " />
            </a>
            <a href="">
              <img src={logoYouTube} alt="#" className="w-8 " />
            </a>
            <a href="">
              <img
                src={logoTwitter}
                alt="#"
                className="w-8 hover:fill-bright-red"
              />
            </a>
            <a href="">
              <img
                src={logoPinterest}
                alt="#"
                className="w-8 hover:fill-bright-red"
              />
            </a>
            <a href="">
              <img
                src={logoInstagram}
                alt="#"
                className="w-8 hover:fill-bright-red"
              />
            </a>
          </div>
          <a href="#" className="[grid-area:logo]">
            <img src={logo} alt="" />
          </a>
          <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">
            Copyright 2020. All Rights Reserved
          </p>
        </section>
      </footer>
    </>
  );
}

export default App;
