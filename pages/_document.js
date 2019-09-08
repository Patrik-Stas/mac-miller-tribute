import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { Container } from 'next/dist/lib/app';

export default class MyDocument extends Document {

  render() {
    console.log(`[_document.js] render()`);
    return (
      <html>
      <Head>
        <link rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">
        </link>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="/_next/static/style.css"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146407754-1"></script>
        <script dangerouslySetInnerHTML={
          { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'UA-146407754-1');
    `}
        }>
        </script>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}
