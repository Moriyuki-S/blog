/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					// cyan
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63'
				},
				secondory: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f'
				}
			},
			backgroundImage: {
				'ocean-wave': 'linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff, #0072ff)'
			},
			backgroundSize: {
				'200%': '200% 200%'
			},
			animation: {
				'gradient-x': 'gradient-x 5s ease infinite'
			},
			keyframes: {
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				}
			}
		}
	},
	plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
};
