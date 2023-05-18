import { GlobalStyles } from "@/styles/globals.styled";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Navbar from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
