import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { store } from '../app_redux/store';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <NextNProgress options={{ showSpinner: false }}/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}
