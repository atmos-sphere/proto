import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const getHello = async () => {
  try {
    const got = await axios.get("/api/hello");
    const json = await got.data;
    return (json && json.message) || "No message";
  } catch (err) {
    return err;
  }
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    getHello()
      .then(setText)
      .then(() => setLoading(false))
      .catch(setText);
  }, []);

  return loading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <CircularProgress
        color="secondary"
        style={{ height: "3em", width: "3em" }}
      />
    </div>
  ) : (
    <div className="container">
      <Head>
        <title>Atmos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ fontSize: "10em" }}>{text}</h1>
      </main>

      <footer>Atmos Sphere</footer>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          h1 {
            animation: 4s infinite ease-in-out floating;
          }

          @keyframes floating {
            0% {
              transform: translateY(0em);
            }
            50% {
              transform: translateY(0.1em);
            }
            100% {
              transform: translateY(0em);
            }
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
