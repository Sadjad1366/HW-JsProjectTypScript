/** @type {import('tailwindcss').Config} */
export default {
  content:
  //  ["**/*.html","./**/*.{js,ts,jsx,tsx}","./home.html"],
  ["**/*.html",
// "./login.html",
// "./signup.html",
// "./home.html",
// "./search.html",
// "./productdetail.html",
// "/onboarding.html",
"./src/**/*.{js,ts,jsx,tsx}",
"./scripts/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],

};
