import localFont from 'next/font/local'

const Lato = localFont({
	src: [
		{
			path: '../../public/assets/fonts/Lato/Lato-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/assets/fonts/Lato/Lato-Bold.ttf',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../public/assets/fonts/Lato/Lato-Black.ttf',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-lato',
})

export { Lato }
