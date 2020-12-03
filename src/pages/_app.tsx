import { AppProps } from 'next/app'
import GlobalStyle from 'styles/global'
import Layout from 'components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </>
  )
}

export default App
