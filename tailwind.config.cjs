/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
		
		},
		screens: {
			'mobile-sm': {
				'max': "330px",
			},
			'mobile-md': {
				'max': "400px",
			},
			'mobile-lg': {
				'max': "480px",
			},
			'tablet-sm': {
				'max': "600px",
			},
			'tablet-lg': {
				'max': "768px",
			},
			'desktop-xs': {
				'max': "900px",
			},
			'desktop-sm': {
				'max': "1080px",
			},
			'desktop-md': {
				'max': "1200px",
			},
			'desktop-lg': {
				'max': "1400px",
			},
		},
		fontFamily: {
			'calibre': ['Calibre'],
			'sf-mono': ['SFMono'],
		}
	},
	plugins: [],
}
