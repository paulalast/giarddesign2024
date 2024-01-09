/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".5rem",
				margin: "1rem",
			},
			colors: {
				grey: "#F5F0EC",
				beige: "#DCC1AB",
				black: "#111111",
				green: "#1B5B31",
				white: "#ffffff",
			},
			fontFamily: {
				headerFont: ["Montserrat", "sans-serif"],
				mainFont: ["Inter", "sans-serif"],
			},
			textShadow: {
				custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			},
			keyframes: {
				"card-anima": {},
			},
			animation: {
				"card-anima": "card-anima 0.5s ease-in-out",
			},
		},
	},
	plugins: [require("daisyui")],
}
