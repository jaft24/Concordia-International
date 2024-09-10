import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import createEmotionCache from '../utility/createEmotionCache'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags emotionStyleTags={[]}  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx, {
      emotionCache: createEmotionCache(),
  });
  return finalProps;
};