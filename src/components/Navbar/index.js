import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksR, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>LAN DIGITAL</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinksR to='/usluge'>USLUGE</NavLinksR>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='klijenti'>KLIJENTI</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinksR to='/about'>O NAMA</NavLinksR>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='footer'>KONTAKT</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/forma'>POSALJITE UPIT</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
