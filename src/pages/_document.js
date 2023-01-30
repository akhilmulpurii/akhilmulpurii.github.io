import Document, { Html, Head, Main, NextScript } from "next/document";

/* eslint-disable require-jsdoc */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            sizes="16x16 32x32"
            href="/images/favicon.png"
            type="image/png"
          ></link>
          <meta name="robots" content="max-image-preview:large" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
