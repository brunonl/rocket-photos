import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Lato } from '../utils/customFonts'
import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${Lato.variable}`}>
			<Header />
			<Component {...pageProps} />
			<ToastContainer />
		</main>
	)
}
