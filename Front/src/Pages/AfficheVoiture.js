import React from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const AfficheVoiture = (props) => {
    const history = useHistory()
    const {Voiture,idAccessoire} = props
    const GoToDetail = () => {
        console.log("go to detail")
        history.push(`/DetailVoiture/${Voiture._id}`)
    }
    return (
        <Container>
            {console.log("passage Props"+idAccessoire)}
              <div className="divVoiture">
                <img src={Voiture.image.url} className="imgVoiture"/>
                <p> <span className="marquePrix"> Marque: </span> {Voiture.marque} <br/> <span className="marquePrix"> Prix: </span>{Voiture.prix} $ </p> 
                <a className="PlusDetail" onClick={() => GoToDetail()}> Plus de Detail </a>
              </div>
        </Container>
    );
};

export default AfficheVoiture;