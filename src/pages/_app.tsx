import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import "@/styles/globals.css";
import AuthInit from "@/components/AuthInit";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AuthInit />
            <Component {...pageProps} />
        </Provider>
    );
}
