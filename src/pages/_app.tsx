import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ReactElementType } from 'react-window'
import '../styles/index.css'

interface Props {
  Component: ReactElementType
  pageProps: AppProps
}

export default function MyApp(props: Props): JSX.Element {
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <Head>
        <title>Moustache Republic</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </StylesProvider>
  )
}
