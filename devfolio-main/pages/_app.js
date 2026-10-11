import { calibre } from "public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MotionConfig } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "../styles/globals.scss";
import { GTAG } from "constants";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <MotionConfig reducedMotion="user">
        <main className={`${calibre.variable} font-sans`}>
          <Component {...pageProps} />
          <GoogleAnalytics gaId={GTAG} />
        </main>
      </MotionConfig>
    </>
  );
};

export default App;
