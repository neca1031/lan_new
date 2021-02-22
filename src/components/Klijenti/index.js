import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-1.svg'
import Icon4 from '../../images/svg-2.svg'

import {
    UslugeContainer,
    UslugeH1,
    UslugeWrapper,
    UslugeCard,
    UslugeIcon,
    UslugeH2,
    UslugeP,
} from './KlijentiElements';
const Klijenti = () => {
    
    return (
        <UslugeContainer id='klijenti'>
            <UslugeH1>Nasi klijenti</UslugeH1>
            <UslugeWrapper>
                <UslugeCard>
                    <UslugeIcon src={Icon1}/>
                    <UslugeH2>PKS</UslugeH2>
                    <UslugeP>Porsche Klub Srbija.</UslugeP>
                </UslugeCard>
            </UslugeWrapper>
        </UslugeContainer>
    )
}

export default Klijenti
