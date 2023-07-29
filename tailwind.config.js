module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: { primary: { 200: "#0000d8", 300: "#0000be", 400: "#0000a5", 500: "#00008B", 600: "#000072", 700: "#000058", 800: "#00003f" } },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
