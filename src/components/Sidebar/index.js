import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu
, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkR} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkR to ='/usluge' onClick={toggle} >
                        USLUGE
                    </SidebarLinkR>
                    <SidebarLink to ='klijenti' onClick={toggle}>
                        KLIJENTI
                    </SidebarLink>
                    <SidebarLinkR to ='/about' onClick={toggle}>
                        O NAMA
                    </SidebarLinkR>
                    <SidebarLink to ='footer' onClick={toggle}>
                        KONTAKT
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/forma'>POSALJITE UPIT</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
