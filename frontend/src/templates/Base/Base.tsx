import { useState } from 'react'
import Navbar from 'components/Navbar'
import Menu from 'components/Menu'
import MainContent from 'components/MainContent'

const Base: React.FC = ({ children }) => {
  const [isOpen, setMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setMenu(!isOpen)
  }
  return (
    <>
      <Navbar onOpenMenu={handleMenu} title="ABRAÃO DUARTE" />
      <Menu isOpen={isOpen} />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Base
