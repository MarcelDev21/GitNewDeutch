import React, {useEffect} from 'react';
import Vente from '../images/Vente.jpg'
import deutch from '../images/deutch.jpg'
import{Row,Col,Container} from 'react-bootstrap'

import Aos from 'aos'
import 'aos/dist/aos.css';

const APropos = () => {
    useEffect(()=> {
        Aos.init({duration:3000})
    },[])
    return (
        <div data-aos="fade-up">
              <div className="headerServices">
                <h1>A Propos de nous</h1>
                <p>Ici nous vous presentons les differents que nous Offrons</p>
             </div>
             <Container> 
             <Row>
             <Col sm={4}>
                <div>
                    <img src={deutch} className="imageApropos"/>
                </div>
             </Col>
             <Col sm={6}>
                <h4 className="A_Propos">A Propos de Nous</h4>
                <p className="paragrapheAPropos"> Ici nous nous presentons comme etant une structure capable de vous offrir le service que vous desirez.
                     Ici nous nous presentons comme etant une structure capable de vous offrir le service que vous desirez.
                     Ici nous nous presentons comme etant une structure capable de vous offrir le service que vous desirez.</p>
                <p>Ici nous nous presentons comme etant une structure capable de vous offrir le service que vous desirez. </p>
                <a className="voitureAbout">Voir Nos Voitures</a>
             </Col>
             </Row>
             </Container>
        </div>
    );
};

export default APropos;