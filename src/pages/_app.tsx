import { AppProps } from 'next/app'
import GlobalStyle from 'styles/global'
import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
