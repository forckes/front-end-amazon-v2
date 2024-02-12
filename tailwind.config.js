/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#353842',
	white: twColors.white,
	primary: '#FF9900',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268394',
	cyan: '#2C99CD',
	gray: '#424B54',
	input: '#222F3E',
	grey: '#9D9D9D',
	red: twColors.red[500]
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		// './app/**/*.{js,ts,jsx,tsx,mdx}'
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: 0.2 },
				to: { opacity: 1 }
			},
			animationCart: {
				from: { transform: 'translateX(110%)' },
				to: {transform: 'translateX(0)' }
			},
			animationCart2: {
				from: { transform: 'translateX(0)' },
				to: {transform: 'translateX(110%)' }
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)'
				},
				'50%': {
					opacity: 0.3
				},
				'100%': {
					opacity: 0.3,
					transform: 'scale(1)'
				}
			}
		},
		animation: {
			opacity: 'animationOpacity .5s ease',
			scaleIn: 'scaleIn .35s ease-in-out',
			rightAppears: 'animationCart .2s ease',

		}
	},

	plugins: []
}
