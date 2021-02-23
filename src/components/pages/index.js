
import React, {useState} from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne } from '../InfoSection/Data';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Kartice from '../Kartice';
import Usluge from '../Usluge';
import Footer from '../Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Usluge />
            <Kartice />
            <Footer />
        </>
    )
}

export default Home
