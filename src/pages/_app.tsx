import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { store } from '../app_redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress options={{ showSpinner: false }}/>
      <Component {...pageProps} />
    </Provider>
  )
}
