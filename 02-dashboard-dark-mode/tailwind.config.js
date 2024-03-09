/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-Top": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
      },
      colors: {
        "Desaturated-Blue": "hsl(228, 34%, 66%)",
        "Toggle-From": "hsl(210, 78%, 56%)",
        "Toggle-To": "hsl(146, 68%, 55%)",
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",

        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        "Instagram-From": "hsl(37, 97%, 70%),",
        "Instagram-To": "hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",
      },
    },
  },
  plugins: [],
};
