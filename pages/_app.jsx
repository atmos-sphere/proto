import Head from "next/head";
import "./app.global.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>Atmos</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo&family=Rubik:wght@500&display=swap" />
      </Head>
      <Component {...pageProps} />
      <footer style={{ display: "none" }}>Atmos Sphere</footer>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
