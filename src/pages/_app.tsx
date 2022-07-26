import type { AppProps } from 'next/app'

import 'windi.css'
import 'assets/styles/main.scss'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
