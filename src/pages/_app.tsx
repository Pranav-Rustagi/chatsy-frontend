import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { AuthInit, Layout } from "@/components";
import store from "@/redux/store/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AuthInit />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}