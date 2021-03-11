import React from 'react'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import configureStore from '../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = configureStore();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
