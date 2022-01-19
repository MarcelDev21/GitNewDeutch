import React from 'react';
import APropos from './APropos';
import Presentation from './Presentation';
import Services from './Services'
import Apropos from './APropos'
import Temoignage from './Temaoignage';
import Footer from './Footer';
const Accueil = () => {
    return (
        <div>
            <Presentation/>
            <Services/>
            <Apropos/>
            <Temoignage/>
            <Footer/>
        </div>
    );
};

export default Accueil;