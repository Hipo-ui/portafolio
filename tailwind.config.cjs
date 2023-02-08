/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			colors: {
				primary: {
					50: "#e7f6fd",
					100: "#cfedfb",
					200: "#9fdbf6",
					300: "#6ec9f2",
					400: "#3eb7ed",
					500: "#0ea5e9",
					600: "#0b84ba",
					700: "#08638c",
					800: "#06425d",
					900: "#03212f",
				},
				neuter: {
					50: "#f3f4f5",
					100: "#e7e8ea",
					200: "#cfd1d5",
					300: "#b7bbc0",
					400: "#9fa4ab",
					500: "#878d96",
					600: "#6c7178",
					700: "#51555a",
					800: "#36383c",
					900: "#1b1c1e",
				},
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
