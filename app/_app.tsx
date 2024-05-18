import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
