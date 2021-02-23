import React from 'react';
import Kartica from './Kartica';
import './Kartice.css';
import Porsche from '../images/svg-3.svg';

function Kartice() {
    return (
        <div className='kartice' id='klijenti'>
            <h1>Prethodni projekti</h1>
            <div className="kartice__container">
                <div className="kartice__wrapper">
                    <ul className="kartice__kartica">
                        <Kartica 
                        src={Porsche}
                        text="Porsche Club Srbija nam je bio prvi klijent.
                        Ponosni smo što su izabrali baš nas za izradu njihovog sajta"
                        label='Porsche Club Srbija'
                        target="_blank"
                        path="http://cms.porsche-clubs.com/PorscheClubs/pc_serbia/pc_main.nsf/web/C5BBBC13B61D3BF5C12581100036D3C7"
                       
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Kartice
