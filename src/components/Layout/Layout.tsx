import Header from 'components/Navbar'

const Layout: React.FC = ({ children }): React.ReactElement => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
