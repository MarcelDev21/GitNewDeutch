import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Presentation from './Presentation';
import axios from 'axios'
import MesVoituresOccasion from './MesVoituresOccasion'
import {Col, Row} from 'react-bootstrap'

const VoitureLuxe = () => {
    const [marque, setMarque] = useState()
    let [data, setData] = useState([])

    useEffect(()=> {
        getVoitureLuxe()
    },[])
    const getVoitureLuxe = async() =>{
        const urlGetVoitureOccasion="http://localhost:5000/login/qualiteVoitureOccasion"
        await axios.get(urlGetVoitureOccasion).then((res)=> {
           // console.log(res.data.typeQualité);
            setData(res.data.typeQualité)
            console.log(data)
        })
    }

    const AfficheVoiture = data.filter((marqueVoiture)=> {
        if(!marque){
            return marqueVoiture}
            else if(marqueVoiture.marque.includes(marque)){
                return marqueVoiture
            }
    }).map((voitureOccasion)=> {
        return(
            <Col sm={3} key={voitureOccasion._id}>
                <MesVoituresOccasion MesVoituresOccasion={voitureOccasion}/>
            </Col>
        )
    })
    return (
        <div>
            <Presentation/>
                 <div className="enregistrerMarque">
                    <input type="text" className="maVoitureLuxe"  placeholder="Recherceher en fonction de la marque......" onChange={(event) => setMarque(event.target.value)}/>
                </div>
                <Row>
                    {AfficheVoiture}
                </Row>
            <Footer/>
        </div>
    );
};

export default VoitureLuxe;