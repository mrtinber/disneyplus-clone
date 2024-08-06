/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Graphik"],
        },
        extend: {
            animation: {
                grow: "grow 2s ease-in-out forwards",
            },
            keyframes: {
                grow: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
