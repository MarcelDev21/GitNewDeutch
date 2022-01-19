import React,{useState, useEffect} from 'react';
import {Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const FourgonetteDetail = (props) => {
    const {maFourgonette} = props
    let history = useHistory()
    const AllerADetailVoiture = () => {
        history.push(`/VoitureLuxeDetail/${maFourgonette._id}`)
    }
    return (
        <div className="divMesVoitures">

            <img src={maFourgonette.image.url} className="imageLuxe"/>
            <div style={{display:'flex'}}>
            <div>
                    <p> <span> Marque: </span> {maFourgonette.marque} <br/> <span>  MesVoitures: </span> {maFourgonette.marque} <br/> <span> Prix: </span>{maFourgonette.prix} Euro </p>
            </div>

            <div style={{marginLeft:20, marginTop:20}}>
                    <a className="voirPlus" onClick={() => {AllerADetailVoiture()}} > Voir Plus</a>
                    {/* <a className="voirPlus" onClick={() => {Rechercher()}}> Voir Plus</a> */}
            </div>
            </div>
        </div>
    );
};

export default FourgonetteDetail;