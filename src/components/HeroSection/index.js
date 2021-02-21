import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }   
    return (
        <HeroContainer>
            <HeroBg>

            </HeroBg>
            <HeroContent>
                <HeroH1>LAN DIGITAL MARKETING</HeroH1>
                <HeroP>
                    Posaljite formu za izradu web sajta
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="forma" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Posaljite upit {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
