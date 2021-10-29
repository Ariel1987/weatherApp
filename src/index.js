import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/Theme'
import { LoadingProvider } from './context/context-loading'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <GlobalStyles />
        <App />
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
