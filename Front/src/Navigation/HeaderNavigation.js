import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav , Col, Navbar, Container, Row} from 'react-bootstrap';
import voiture from '../images/voiture.jpg'
const HeaderNavigation = () => {
    let history = useHistory()

    const Login = () => {
        console.log("add login")
        history.push('/Login')
    }

    const LogOut = () => {
        window.localStorage.token = ""
        history.push('/Accueil')
    }

    return (
        <Row className="headerNavigation">
           <Col sm={3}>
                <div style={{display:'flex'}}>
                     <img src={voiture} className="imageVoiture"/>
                     <p className="headerDeutchAuto"> DeutchAutomoto</p>
                </div>
          </Col> 
           <Col sm={7}>
               <div style={{marginTop:20, marginLeft:60}}>
                    <Link  to="/accueil" className="accueil">Accueil</Link>
                    <Link className="mesLinks" to="/VoitureOccasion">Voiture Luxe</Link>
                    <Link className="mesLinks" to="/VoitureLuxe">Voiture Occasion</Link>
                    <Link className="mesLinks" to="/Fourgonette">Fourgonette</Link>
                    {/* <Link className="mesLinks"> Fourgonette</Link> */}
               </div>
          </Col> 
           <Col sm={2} >
                <div className="headerLeft">
                    <a className="signIn" onClick={() => Login()}> Sign In</a>
                    <a  onClick={() => LogOut()}>LogOut</a>
                </div>
          </Col> 
        </Row>
    );
};

export default HeaderNavigation;