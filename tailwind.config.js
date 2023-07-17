/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
