import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Prompt } from 'next/font/google';

const propmt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['400', '800'],
  variable: '--font-prompt',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${propmt.className}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;