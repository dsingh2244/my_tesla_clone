import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Header() {
    const [burgerstatus, setburgerstatus] = useState(false);
  return (
    <Con>
        <a>
            <img src="/images/logo.svg" alt=''/>
        </a>
        <Menu>
            <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a>
        </Menu>
        <Rightmenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <Custommenu onClick={()=>setburgerstatus(true)}/>
        </Rightmenu>
        <BurgerNav show={burgerstatus}>
            <CloseWrap>
                <Customclose onClick={()=>setburgerstatus(false)}/>
            </CloseWrap>
            <li><a href='#'>Model S</a></li>
            <li><a href='#'>Model 3</a></li>
            <li><a href='#'>Model X</a></li>
            <li><a href='#'>Model Y</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Test Drive</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Find Us</a></li>
            <li><a href='#'>Support</a></li>
        </BurgerNav>
    </Con>
  )
}

export default Header

const Con=styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-decoration: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const Rightmenu=styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
    }
`
const Custommenu=styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav=styled.div`
      position: fixed;
      top:0;
      bottom: 0;
      right: 0;
      background: white;
      width: 300px;
      z-index: 10;
      list-style: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: start;
      transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
      transition: transform 0.2s;
      li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
      }
`
const Customclose=styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrap=styled.div`
    display: flex;
    justify-content: flex-end;
`