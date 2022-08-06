const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					violet: 'hsl(263, 55%, 52%)',
					'dark-grayish-blue': 'hsl(217, 19%, 35%)',
					'dark-blackish-blue': 'hsl(219, 29%, 14%)',
				},
				neutral: {
					'light-gray': 'hsl(0, 0%, 81%)',
					'light-grayish-blue': 'hsl(210, 46%, 95%)',
				},
			},
			fontFamily: {
				sans: ["'Barlow Semi Condensed'", ...defaultTheme.fontFamily.sans],
			},
		},
	},

	plugins: []
};

module.exports = config;
