import React, {useEffect} from 'react';
import {Container, Col,Row} from 'react-bootstrap'
import Vente from '../images/Vente.jpg'
import adjoint1 from '../images/adjoint1.jpg'
import adjoint2 from '../images/adjoint2.jpg'
import adjoint3 from '../images/adjoint3.jpg'
import adjoint4 from '../images/adjoint4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaBeer , FaStar, FaStarHalf} from 'react-icons/fa';

const Temoignage = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    })
    return (
        <div data-aos="fade-up">
              <div className="headerServices">
                <h1>Nos Temoignages</h1>
                <p>Quelques personnes satisfaites de nos offres</p>
             </div>

             <Container>
                 <Row>
                     <Col sm={3}>
                        <div className="temoignage">
                             <div>
                                <img src={adjoint4} className="imageTemoignage"/>
                                <p className="auteurTemoignage">Didier Djangoul</p>
                                <div className="mesEtoiles">
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStarHalf className="fabe"/>
                                </div>
                            </div>
                            <div>
                                <p className="paragrapheTemoignage">Avec DeutshAutomoto, nous sommes a l'abri des arnaques.
                            la prise du client est immediate et accessible DeutshAutomoto a 
                            tous ceux qui veulent faire l'achat d'un vehicule en bon etat</p>
                            </div>
                            
                        </div>
                     </Col>

                     <Col sm={3}>
                        <div className="temoignage">
                             <div>
                                <img src={adjoint3} className="imageTemoignage"/>
                                <p className="auteurTemoignage">Didier Djangoul</p>
                                <div className="mesEtoiles">
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStarHalf className="fabe"/>
                                </div>
                            </div>
                            <div>
                                <p className="paragrapheTemoignage">Avec DeutshAutomoto, nous sommes a l'abri des arnaques.
                            la prise du client est immediate et accessible DeutshAutomoto a 
                            tous ceux qui veulent faire l'achat d'un vehicule en bon etat</p>
                            </div>
                            
                        </div>
                     </Col>

                     <Col sm={3}>
                        <div className="temoignage">
                             <div>
                                <img src={adjoint2} className="imageTemoignage"/>
                                <p className="auteurTemoignage">Didier Djangoul</p>
                                <div className="mesEtoiles">
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStarHalf className="fabe"/>
                                </div>
                            </div>
                            <div>
                                <p className="paragrapheTemoignage">Avec DeutshAutomoto, nous sommes a l'abri des arnaques.
                            la prise du client est immediate et accessible DeutshAutomoto a 
                            tous ceux qui veulent faire l'achat d'un vehicule en bon etat</p>
                            </div>
                            
                        </div>
                     </Col>

                     <Col sm={3}>
                        <div className="temoignage">
                             <div>
                                <img src={adjoint1} className="imageTemoignage"/>
                                <p className="auteurTemoignage">Didier Djangoul</p>
                                <div className="mesEtoiles">
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStar className="fabe"/>
                                    <FaStarHalf className="fabe"/>
                                </div>
                            </div>
                            <div>
                                <p className="paragrapheTemoignage">Avec DeutshAutomoto, nous sommes a l'abri des arnaques.
                            la prise du client est immediate et accessible DeutshAutomoto a 
                            tous ceux qui veulent faire l'achat d'un vehicule en bon etat</p>
                            </div>
                            
                        </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    );
};

export default Temoignage;