/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(240, 10%, 5%)',
				void: '#050505',
				charcoal: '#121212',
				'acid-green': '#CCFF00',
				'hyper-violet': '#7F00FF',
				'off-white': '#E0E0E0',
				'stark-white': '#FFFFFF'
			},
			fontFamily: {
				sans: ['Khand', 'sans-serif'],
				mono: ['Orbitron', 'monospace'],
				serif: ['Playfair', 'serif']
			},
			animation: {
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			keyframes: {
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)'
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)'
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)'
					}
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(180deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'50%': {
						transform: 'translateY(50%)'
					},
					'100%': {
						transform: 'translateY(-50%)'
					}
				}
			}
		}
	},
	plugins: []
};
