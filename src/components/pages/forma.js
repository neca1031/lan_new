import React,{useState} from 'react'

import FormaElementi from '../Forma';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Forma = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <FormaElementi />
        
        </>
    )
}

export default Forma
