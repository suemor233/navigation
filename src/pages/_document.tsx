import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {

    return (
      <Html lang="zh-cn">
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <script src="https://at.alicdn.com/t/font_3391495_6hi3rnhcf1p.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
