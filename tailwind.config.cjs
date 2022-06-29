/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				geo: ['Geo', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#3D85F5',

					secondary: '#2563eb',

					accent: '#D9D9D9',

					neutral: '#3D85F5',

					'base-100': '#1A1A1B',

					info: '#FFFFFF',

					success: '#84EDAF',

					warning: '#3D85F5',

					error: '#9238EB'
				}
			}
		]
	}
};
