import Navbar from 'components/Navbar'

const Base: React.FC = ({ children }) => (
  <>
    <Navbar title="ABRAÃO DUARTE" />
    {children}
  </>
)

export default Base
