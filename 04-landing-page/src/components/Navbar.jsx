import logo from "../images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="h-20 wrapper flex items-center justify-between">
      <a href="./" className="w-1/3 max-w-[140px]">
        <img src={logo} alt="logo" className="w-full" />
      </a>
      <input type="checkbox" id="menu" className="peer hidden" />
      <label
        htmlFor="menu"
        className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
      ></label>

      <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none z-40">
        <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl  md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
