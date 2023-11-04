// _app.tsx
import { AppProps } from "next/app";
import "../styles/globals.css"; // Importe seus estilos globais aqui

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
