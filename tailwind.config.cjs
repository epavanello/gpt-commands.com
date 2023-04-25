const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		colors: {
			app: '#3290EE',
			appDark: '#0f79e3'
		},
		extend: {
			backgroundImage: {
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))'
			},
			keyframes: {
				disco: {
					'0%': { transform: 'translateY(-50%) rotate(0deg)' },
					'100%': { transform: 'translateY(-50%) rotate(360deg)' }
				}
			},
			animation: {
				disco: 'disco 1s linear infinite'
			}
		}
	},

	plugins: [require('daisyui')]
};
