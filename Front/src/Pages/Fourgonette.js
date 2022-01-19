import React, {useEffect,useState} from 'react';
import Presentation from './Presentation';
import Footer from './Footer';
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import FourgonetteDetail from './FourgonetteDetail'

const Fourgonette = () => {

    const [fourgonette, setFourgonette] = useState({fourgonette:[]})
    const [marque, setMarque] = useState()
    useEffect(()=>{
        getFourgonette()
    },[])
    const getFourgonette = async()=>{
        const urlFourgonette= "http://localhost:5000/login/fourgonette"
        await axios.get(urlFourgonette).then((res)=> {
            //console.log(res.data.typeQualité);
            setFourgonette({fourgonette:res.data.typeQualité})
            console.log(fourgonette.fourgonette)
        })
    }

    const afficherFourgonette = fourgonette.fourgonette.filter((maFourgo)=> {
        if(!marque){return maFourgo}
        else if(maFourgo.marque.includes(marque))
        {return maFourgo}})
        .map((res)=> {
        return(
            <Col sm={3} key={res._id}>
                <FourgonetteDetail maFourgonette={res}/>
            </Col>
        )
    })

    return (
        <div>
          <Presentation/>
                 {/* <h1>Fourgonette</h1>  */}
                 <input type="text" className="maVoitureLuxe"  placeholder="Recherceher en fonction de la marque......" onChange={(event) => setMarque(event.target.value)}/>
                 <Row>
                     {afficherFourgonette}
                 </Row>
           <Footer/>
        </div>
    );
};

export default Fourgonette;