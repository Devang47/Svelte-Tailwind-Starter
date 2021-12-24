module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts,css}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('tailwindcss/defaultTheme').colors,
				primary: '#000000',
				primary_accent: '#101828',
				secondary: '#F4F5F6',
				secondary_accent: '#EDF1F5',
				red_accent: '#FF0031',
				green_accent: '#12B76A',
				blue_accent: '#116FC6',
				yellow_accent: '#F2BB4D'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
