import '../styles/globals.css'
import type { AppProps } from 'next/app'
import initFirebase from '../config';

initFirebase();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
