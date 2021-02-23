import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialLogo,
    WebsiteRights,
    SocialIconLink
} from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Kontakt  </FooterLinkTitle>
                                <FooterLink to="/forma">O nama</FooterLink>
                                <FooterLink to="/forma">Kontakt</FooterLink>
                                <FooterLink to="/forma">Usluge</FooterLink>
                                <FooterLink to="/forma">Copy</FooterLink>
                                <FooterLink to="/forma">lorem ipsum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Kontakt  </FooterLinkTitle>
                                <FooterLink to="/forma">O nama</FooterLink>
                                <FooterLink to="/forma">Kontakt</FooterLink>
                                <FooterLink to="/forma">Usluge</FooterLink>
                                <FooterLink to="/forma">Copy</FooterLink>
                                <FooterLink to="/forma">lorem ipsum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Kontakt  </FooterLinkTitle>
                                <FooterLink to="/forma">O nama</FooterLink>
                                <FooterLink to="/forma">Kontakt</FooterLink>
                                <FooterLink to="/forma">Usluge</FooterLink>
                                <FooterLink to="/forma">Copy</FooterLink>
                                <FooterLink to="/forma">lorem ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}
                        >lan digital</SocialLogo>
                        <WebsiteRights>lan digital © {new Date().getFullYear()} 
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/elonmusk" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
