import React,{useEffect} from 'react';
import {Row,Col, Container} from 'react-bootstrap'
import Vente from '../images/Vente.jpg'
import voiture1 from '../images/voiture1.jpg'
import pieceauto from '../images/pieceauto.jpg'
import dossier from '../images/dossier.jpg'
import alex from '../images/alex.jpg'
import ford from '../images/ford.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css';
const Services = () => {

    useEffect(() => {
        Aos.init({duration:3000})
    },[])
    return (
        <div data-aos="fade-up" className="Services">
             <div className="headerServices">
                <h1>Nos Services</h1>
                <p>Ici nous vous presentons les differents que nous Offrons</p>
             </div>
             <Container>
             <Row>
                <Col sm={4}>
                    <div className="GrandDivServices">
                        <div className="originalDivService">
                             <img src={voiture1} className="imageVente"/>
                        </div>
                 
                        <div className="originalDivService">
                             <h4 className="venteVoiture"> Vente et Location Auto</h4>
                             <p className="paragrapheVoiture">Ici nous vous vendons les voitures neuves, d'occasions, des fourgonettes. 
                            Vous pouvez egaelement commandés vos voitures en utilisant les contacts ci dessous</p>
                        </div>
              
                        <div className="originalDivService"> 
                            <a className="voirVoitures">Voir Nos Voitures</a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                <div className="GrandDivServices">
                        <div className="originalDivService">
                             <img src={pieceauto} className="imageVente"/>
                        </div>
                 
                        <div className="originalDivService">
                             <h4 className="venteVoiture"> Achat des Pièces Auto</h4>
                             <p className="paragrapheVoiture">Ici nous vous vendons les voitures neuves, d'occasions, des fourgonettes. 
                            Vous pouvez egaelement commandés vos voitures en utilisant les contacts ci dessous</p>
                        </div>
              
                        <div className="originalDivService"> 
                            <a className="voirVoitures">Voir Nos Voitures</a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                <div className="GrandDivServices">
                        <div className="originalDivService">
                             <img src={dossier} className="imageVente"/>
                        </div>
                 
                        <div className="originalDivService">
                             <h4 className="venteVoiture"> Services Après vente</h4>
                             <p className="paragrapheVoiture">Ici nous vous vendons les voitures neuves, d'occasions, des fourgonettes. 
                            Vous pouvez egaelement commandés vos voitures en utilisant les contacts ci dessous</p>
                        </div>
              
                        <div className="originalDivService"> 
                            <a className="voirVoitures">Voir Nos Voitures</a>
                        </div>
                    </div>
                </Col>
             </Row>
             </Container>
        </div>
    );
};

export default Services;