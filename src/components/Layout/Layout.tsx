import Header from 'components/Header'

const Layout: React.FC = ({ children }): React.ReactElement => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
