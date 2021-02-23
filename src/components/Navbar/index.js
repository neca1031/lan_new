import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksR, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

     const changeNav = () => {
         if(window.scollY >= 80) {
             setScrollNav(true)
         } else {
             setScrollNav(false)
         }
     }

      useEffect(() => {
          window.addEventListener('scroll', changeNav)
      }, []);

      const toggleHome = () => {
          scroll.scrollToTop();
      };
    return (
        <>
          <Nav scrollNav = {scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>LAN DIGITAL</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinksR to='/usluge'
                          >USLUGE</NavLinksR>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='klijenti' smooth={true} duration={500} spy={true} exact='true' offset={0}
                          >KLIJENTI</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinksR to='/about'>O NAMA</NavLinksR>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='footer'
                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                          >KONTAKT</NavLinks>
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
