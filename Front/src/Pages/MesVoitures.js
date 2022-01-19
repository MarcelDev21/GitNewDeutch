import React, {useEffect,useState} from 'react';
import {Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css';

const MesVoitures = (props) => {
    const history  = useHistory()
    const [data,setData] = useState()

    useEffect(()=>{
        Aos.init({duration:3000});
        getDataByMarque()
    },[])
    const {VoitureLuxe,Rechercher, Marque,MaMarque} = props

    const getDataByMarque = async() => {
        if(Marque != undefined){
            console.log("voici ma Marque"+Marque)
        }

    }

    const ParticulariteVoiture = () => {
        console.log("test")
        history.push(`/VoitureLuxeDetail/${VoitureLuxe._id}`)
    }

    const Afficher = (valeur) =>{
       if(valeur.length !== 0){
        return(
            <div className="divMesVoitures">
            <img src={VoitureLuxe.image.url} className="imageLuxe"/>
            <div style={{display:'flex'}}>
               <div>
                    <p> <span> Marque: </span> {VoitureLuxe.marque} <br/> <span>  MesVoitures: </span> {VoitureLuxe.marque} <br/> <span> Prix: </span>{VoitureLuxe.prix} Euro </p>
               </div>

               <div style={{marginLeft:20, marginTop:20}}>
                    <a className="voirPlus" onClick={() => {ParticulariteVoiture()}}> Voir Plus</a>
                    {/* <a className="voirPlus" onClick={() => {Rechercher()}}> Voir Plus</a> */}
               </div>
            </div>
       </div>
        )
       }else{
           return(
               <div>
                   <h1> test</h1>
               </div>
           )
       }
    }
    return (
        <Container>
           {Afficher(VoitureLuxe.marque)}
        </Container>
    );
};

export default MesVoitures;