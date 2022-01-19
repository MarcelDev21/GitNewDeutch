import React,{useEffect, useState} from 'react';
import axios from 'axios'
import Presentation from './Presentation'
import Footer from './Footer'
import MesVoitures from './MesVoitures'
import {Col,Row, Container} from 'react-bootstrap'

const VoitureOccasion = () => {
    const [data,setData] = useState([])
    const [marque, setMarque] = useState()
    useEffect(() =>{
        getUrlLuxe()
    },[])
    const getUrlLuxe = async () => {
        const urlGetLuxe = "http://localhost:5000/login/qualiteVoiture"
        await axios.get(urlGetLuxe).then((res) => {
             //console.log(res.data.typeQualité);
             setData(res.data.typeQualité)
             //console.log(data)
             })    
    }

    const Rechercher = async() => {
         console.log("ma valeur", marque)
          if(marque === undefined){
              console.log("ma marque est undefined")
          }else{
            console.log("Voici ma marque"+ marque)
            return(
                <Col sm={3}>
                      <MesVoitures MaMarque={"marque"}/>
                </Col>
            )
          }
    }

    const afficheMesVoitures = data.filter((voitureLuxes) =>{if(!marque){
        console.log("whats")
        return voitureLuxes
    }else if(voitureLuxes.marque.includes(marque)){return voitureLuxes}} ).map((voitureLuxe)=>{
        return(
           <Col sm={3} key={voitureLuxe._id}>
                <MesVoitures VoitureLuxe={voitureLuxe} Rechercher={Rechercher} Marque={marque}/>
           </Col>
        )
    })

    return (
        <div>
        {/* {console.log(data)} */}
            <Presentation/>
            <div >
                <div className="enregistrerMarque">
                    <input type="text" className="maVoitureLuxe"  placeholder="Recherceher en fonction de la marque......" onChange={(event) => setMarque(event.target.value)}/>
                </div>
            </div>
            <Row>
                {afficheMesVoitures}
            </Row>
            <Footer/>
        </div>
    );
};

export default VoitureOccasion;