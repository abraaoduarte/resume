import { AppProps } from 'next/app'
import GlobalStyle from 'styles/global'
import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
