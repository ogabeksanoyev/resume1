import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../container/Container'
import Solution from '../Solution'

const Menu = () => {
  const { menu } = useParams();
  return (
    <div>
      <Container>
        {menu == "solution" && <Solution />}
        {/* {menu == "features" && <Users />}
        {menu == "pricing" && <Todos />}
        {menu == "support" && <Photos />} */}
      </Container>
    </div>
  )
}

export default Menu
