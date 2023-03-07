/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    colors: {
      header: `hsl(246, 80%, 60%)`,
      "card-base": `hsl(246, 80%, 60%)`,
      // card colors
      work: "hsl(15, 100%, 70%)",
      play: "hsl(195, 74%, 62%)",
      study: "hsl(348, 100%, 68%)",
      exercise: "hsl(145, 58%, 55%)",
      social: "hsl(264, 64%, 52%)",
      selfcare: "hsl(43, 84%, 65%)",
      // neutral colors
      "neutral-1": "hsl(226, 43%, 10%)",
      "neutral-2": "hsl(235, 46%, 20%)",
      "neutral-3": "hsl(235, 45%, 61%)",
      "neutral-4": "hsl(236, 100%, 87%)",
    },
    fontFamily: {
      sans: "Rubik",
    },
  },
  plugins: [],
};
