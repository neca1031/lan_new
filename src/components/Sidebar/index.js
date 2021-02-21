import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu
, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='usluge' onClick={toggle} >
                        USLUGE
                    </SidebarLink>
                    <SidebarLink to ='klijenti' onClick={toggle}>
                        KLIJENTI
                    </SidebarLink>
                    <SidebarLink to ='about' onClick={toggle}>
                        O NAMA
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/forma'>KONTAKTIRAJTE NAS</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
