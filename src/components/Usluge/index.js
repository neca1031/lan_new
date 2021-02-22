import React,{useState} from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-1.svg'
import Icon4 from '../../images/svg-2.svg'
import { Button } from '../ButtonElement';
import {
    UslugeContainer,
    UslugeH1,
    UslugeWrapper,
    UslugeCard,
    UslugeIcon,
    UslugeH2,
    UslugeP,
    BtnWrap,
    ArrowForward,
    ArrowRight
} from './UslugeElements';
const Usluge = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    } 
    return (
        <UslugeContainer id='usluge'>
            <UslugeH1>Nase usluge</UslugeH1>
            <UslugeWrapper>
                <UslugeCard>
                    <UslugeIcon src={Icon1}/>
                    <UslugeH2>Web Design</UslugeH2>
                    <UslugeP>Nudimo usluge web designa.</UslugeP>
                </UslugeCard>
                <UslugeCard>
                    <UslugeIcon src={Icon2}/>
                    <UslugeH2>SEO</UslugeH2>
                    <UslugeP>Nudimo usluge web designa.</UslugeP>
                </UslugeCard>
                <UslugeCard>
                    <UslugeIcon src={Icon3}/>
                    <UslugeH2>Graphical Design</UslugeH2>
                    <UslugeP>Nudimo usluge web designa.</UslugeP>
                </UslugeCard>
                <UslugeCard>
                    <UslugeIcon src={Icon4}/>
                    <UslugeH2>Digital Marketing</UslugeH2>
                    <UslugeP>Nudimo usluge web designa.</UslugeP>
                </UslugeCard>
            </UslugeWrapper>
            <BtnWrap>
            <Button to="forma" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Saznajte vise {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
            </BtnWrap>
        </UslugeContainer>
    )
}

export default Usluge
