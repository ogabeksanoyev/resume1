import { IconButton, List, ListItem, ListItemText, MenuItem, TextField } from '@material-ui/core'
import { Brightness4, Close, Menu, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import ContainerWrapper from './ContainerWrapper'
import SimpleListMenu from './i18';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { isToggleSidebar } from '../../redux/action/globalAction';
import Footer from '../Footer/Footer';


const data = [
  { to: "/solution/solution", title: "Solution" },
  { to: "/solution/features", title: "Features" },
  { to: "/solution/pricing", title: "Pricing" },
  { to: "/solution/support", title: "Support" },
]

const Container = ({ children }) => {
  const [color, setColor] = useState(-1);

  const sidebarShow = useSelector(state => state.global.sidebarShow);
  const dispatch = useDispatch()
  return (
    <ContainerWrapper>
      <div className={`sidebar ${sidebarShow && "show" || ""}`}>
        <List className="s_ul mt-5" >
          {
            data.map((v, i) => {
              return (
                <Link to={v.to} onClick={() => { setColor(i) }} >
                  <ListItem button className="text-center">
                    <ListItemText className={`${i == color && "text-primary" || ""}`} primary={v.title} />
                  </ListItem>
                </Link>
              )
            })
          }
        </List>


      </div>
      <div className="right-side">
        <header className={`rheader py-2 ${sidebarShow ? "show_h" : ""}`}>
          <div className="container-fluid d-flex align-items-center justify-content-between">

            <div className="header_l"><IconButton onClick={() => isToggleSidebar(dispatch)}>{!sidebarShow ? <Menu /> : <Close />}</IconButton></div>

            <div className="header_r">

              <form className="r_input">
                <input placeholder="Serach..." />
                <div className="r_search"> <Search /></div>
              </form>
              <SimpleListMenu />
              <IconButton> <Brightness4 /> </IconButton>
            </div>
          </div>
        </header>
        <div className={`content ${sidebarShow && "before" || ""}`}>
          {children}
        </div>
      </div>
      <Footer />
    </ContainerWrapper >
  )
}

export default Container
