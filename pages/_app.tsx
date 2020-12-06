
import { AppProps } from 'next/app';
import './normalize.css';
import './skeleton.css';
import './app.css';
import './theme.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;