import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const MesVoituresOccasion = (props) => {
    const {MesVoituresOccasion} = props
    let history = useHistory()
    const ParticulariteVoiture = () => {
        let notreid = MesVoituresOccasion._id
        console.log(notreid)
        history.push(`/VoitureLuxeDetail/${notreid}`)
    }

     const Afficher = () => {
      return(
        <div className="divMesVoitures">
            <img src={MesVoituresOccasion.image.url} className="imageLuxe"/>
            <div style={{display:'flex'}}>
            <div>
                    <p> <span> Marque: </span> {MesVoituresOccasion.marque} <br/> <span>  MesVoitures: </span> {MesVoituresOccasion.marque} <br/> <span> Prix: </span>{MesVoituresOccasion.prix} Euro </p>
            </div>

            <div style={{marginLeft:20, marginTop:20}}>
                    <a className="voirPlus" onClick={() => {ParticulariteVoiture()}}> Voir Plus</a>
                    {/* <a className="voirPlus" onClick={() => {Rechercher()}}> Voir Plus</a> */}
            </div>
            </div>
        </div>
      )
  }

    return (
        <Container>
            {Afficher()}
        </Container>
    );
};

export default MesVoituresOccasion;