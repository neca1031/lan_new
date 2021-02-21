import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>LAN</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='usluge'>USLUGE</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='klijenti'>KLIJENTI</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='about'>O NAMA</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/forma'>KONTAKTIRAJTE NAS</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
