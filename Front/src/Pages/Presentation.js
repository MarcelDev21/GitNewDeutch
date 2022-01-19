import React,{useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import carBack from '../images/carBack.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
const Presentation = () => {
    useEffect(() => {
        Aos.init({duration: 3000})
    },[])
    return (
        <div className="MaPresentation">
          <Row>
              <Col sm={8}>
                    <div data-aos="fade-up" className="divPresentation">
                          <h1> <span className="presentationDeutsh"> DeutchAutomoto </span>, acheter votre <br/> voiture <span> En toute Securité.</span></h1> 
                          <p>Sur DeutchAutomoto vous trouverez satisfaction sur l'achat de votre vehicule.<br/>Plusieurs ont essayé et en ont sortis satifaits</p>
                          <a className="voir_Voitures"> Voir nos Voitures</a>
                    </div>
              </Col>
              <Col sm={4} className="myImages">
                 <div data-aos="fade-right">
                     <img src={carBack} className="carBack"/>
                 </div>
              </Col>
          </Row>
        </div>
    );
};

export default Presentation;