import Login from "../components/Login";
import "material-components-web/dist/material-components-web.min.css";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Todo App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login />
    </Fragment>
  );
}
