import React, {useEffect,useState} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import Presentation from './Presentation'
import Footer from './Footer'
import {Container, Row, Col, Modal,Button, Alert} from 'react-bootstrap'


const DetailVoiture = () => {

   

    const [data, setmaData] = useState([])
    const [message, setMessage] = useState()
    const [accessoirVoiture, setAccessoire] = useState({mesAccesoires:[]})
    {/* const {image,marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif,qualitéVoiture} */}
    const [marque, setMarqe] = useState()
    const [model, setModel] = useState()
    const [immatriculation, setImmatriculation] = useState()
    const [moteur, setMoteur] = useState()
    const [puissance, setPuissance] = useState()
    const [indice, setIndice] = useState()
    const [rapports, setRapports] = useState()
    const [typeVehicule, setTypeVehicule] = useState()
    const [portières,setPortières] = useState()
    const [couleur,setCouleur] = useState()
    const [habitacle,setHabitacle] = useState()
    const [etat,setEtat] = useState()
    const [prix,setPrix] = useState()
    const [prixApproximatif,setPrixApproximatif] = useState()
    const [qualitéVoiture,setQualiteVoiture] = useState()
    const [messageModification, setMessageodification] = useState()
    const [Bluetooth,setBluetooth] = useState()

    const [detailVoitureAccessoire, setDetailVoitureAccessoire] = useState([])
    
    const [aireConditionné, setAireConditionné] = useState()
    const [aireDeStationnement, setAiredeStationnement] = useState()
    const [ABS, setAbs] = useState()
    const [radio, setRadio] = useState()
    const [kitMainLibre, setKitMainLibre] = useState()
    const [visiteTechnique, setVisiteTechnique] = useState()
    const [jantes, setJantes] = useState()
    const [tempomat, setTampomat] = useState()
    const [toitOuvrant, setToitOuvrant] = useState()
    const [systemeNavigation, setSystemeNavigation] = useState()
    const [siegeChauffant, setSiegeChauffant] = useState()
    const [siegeMassant, setSiegeMassant] = useState()
    const [phares, setPhares] = useState()
    const [messageVoiture, setMessgeVoiture] = useState()
    const [idAccessoire, setIdAccessoire] = useState()

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // modifier accessoire
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    const [loading, setLoading] = useState(false)
    const [imageNew,setImageNew] = useState("")
    const [idImage, setIdImage] = useState("")
    const [urlImage, setImageUrl] = useState("")

    const [loading1, setLoading1] = useState(false)
    const [imageNew1,setImageNew1] = useState("")
    const [idImage1, setIdImage1] = useState("")
    const [urlImage1, setImageUrl1] = useState("")

    const [loading2, setLoading2] = useState(false)
    const [imageNew2,setImageNew2] = useState("")
    const [idImage2, setIdImage2] = useState("")
    const [urlImage2, setImageUrl2] = useState("")

    const [loading3, setLoading3] = useState(false)
    const [imageNew3,setImageNew3] = useState("")
    const [idImage3, setIdImage3] = useState("")
    const [urlImage3, setImageUrl3] = useState("")

    const [loading4, setLoading4] = useState(false)
    const [imageNew4,setImageNew4] = useState("")
    const [idImage4, setIdImage4] = useState("")
    const [urlImage4, setImageUrl4] = useState("")

    const [loading5, setLoading5] = useState(false)
    const [imageNew5,setImageNew5] = useState("")
    const [idImage5, setIdImage5] = useState("")
    const [urlImage5, setImageUrl5] = useState("")

    const history = useHistory()

    const {id} = useParams()
    useEffect(() => {
        AfficherMessagedEntree();
        detailId();
        detailAccessoire()
    },[])


    const AfficherMessagedEntree = () => {
        return(
            <div>
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                    </Alert>
            </div>
        )
    }

    const detailId = async() => {
        const urlGetById = `http://localhost:5000/login/recupereInfoVoiture/${id}`
        await axios.get(urlGetById,{headers:{"token":window.localStorage.token}}).then((res) => {
            console.log(res.data.getVoiture.AccessoireSchema[0]);
            setAccessoire(res.data.getVoiture.AccessoireSchema[0])
            setmaData([res.data.getVoiture])
            //setmaData(res.data.getVoiture)
            //console.log(data)
            })
            detailAccessoire()
    }

    const detailAccessoire = async () => {
        const urlGetAccessoire=`http://localhost:5000/login/informationAccesoireVoiture/${id}`
        await axios.get(urlGetAccessoire,{headers:{"token":window.localStorage.token}}).then((res)=> {
           console.log(res.data.getIdAccessoire.AccessoireSchema);
           setDetailVoitureAccessoire(res.data.getIdAccessoire.AccessoireSchema)
        })
    }

    const SupprimerVoiture = async() =>{
        const urlSupprimer =`http://localhost:5000/login/deleteVoiture/${id}`
        await axios.delete(urlSupprimer,{headers:{"token":window.localStorage.token}}).then((res) => {
            console.log(res);
            if(res.data.succes === true){
                setMessage(res.data.message)
                history.push('/Admin')
            }})
        console.log("supprimer")
    }

    const EffectuerModification = async()=>{
        console.log(id)
        const urlModifierVoiture=`http://localhost:5000/login/ModifiervVehicule/${id}`
        await axios.put(urlModifierVoiture,{marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif,qualitéVoiture},{headers:{"token": window.localStorage.token}})
        .then((res)=>{
            //console.log(res);
            if(res.data.succes === true){
                setMessageodification(res.data.message)
            }else{
                setMessageodification(res.data.message)
            }
        })
    }


    const Actualiser = async() => {
        console.log("id"+id)
        if(!id || id== null){
            console.log("cette voiture n existe plus")
        }
        else{
        const urlActualiser = `http://localhost:5000/login/actualisationId/${id}`
        await axios.get(urlActualiser,{headers:{"token":window.localStorage.token}}).then((res)=> {
         console.log(res.data.actualisationId._id);
         //setmaData([res.data.actualisationId])
            if(!res.data.actualisationId._id || res.data.actualisationId._id === null){
                console.log("rien ne fonctionne")
            }else{
                setmaData([res.data.actualisationId])
            }
        });
        }
    }

    const ModifierAccessoire = async() => {
        let idAccess
        {detailVoitureAccessoire.map((res)=> { idAccess = res._id})}
        console.log(idAccess)
        console.log()
      
        const url=`http://localhost:5000/login/ModifierAccessoire/${idAccess}`
        await axios.put(url,{aireConditionné,ABS,radio,kitMainLibre,visiteTechnique,jantes,tempomat,toitOuvrant,systemeNavigation,siegeChauffant,siegeMassant,siegeMassant,phares},{headers:{"token":window.localStorage.token}})
        .then((res)=> {
            //console.log(res);
            setAccessoire({mesAccesoires:[res.data.modifierVoitureAccessoire]})
            console.log(accessoirVoiture.mesAccesoires)
        })
        }

    const ActualiserAccessoire = async(ids) =>{
        console.log(ids)
        const urlAccessoire= `http://localhost:5000/login/actualiserAccessoire/${ids}`
        await axios.get(urlAccessoire,{headers:{"token":window.localStorage.token}}).then((res)=> {console.log(res)})
    }

    const uploadFile = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew(res.data.url);
          setLoading(false);
          setIdImage(res.data.id)
          setImageUrl(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }


    const AjouterImage = async() =>{
        //console.log(id)
        //let id = idImage;
        //let url = urlImage;
        console.log(id)

        console.log(idImage1, urlImage1)
        console.log(idImage2, urlImage2)
        console.log(idImage3,urlImage3)
        console.log(idImage4, urlImage4)
        console.log(idImage5, urlImage5)
        //console.log(idImage,urlImage)

        if(idImage1 == "" || idImage2 == "" || idImage3 == "" || idImage4 == "" || idImage5 == ""){
            console.log("montre moi une reponse")
            setMessgeVoiture("ajouter d'autres images")
        }else{
                const urlAddImage = `http://localhost:5000/login/addnewImage/${id}`
                await axios.put(urlAddImage,{image1:{id:idImage, url:urlImage}, image2:{id:idImage1, url:urlImage1}
                    , image3:{id:idImage2, url:urlImage2}, image4:{id:idImage3, url:urlImage3}
                    , image5:{id:idImage4, url:urlImage4}} ,{headers:{"token": window.localStorage.token}})
                .then((response)=> {
                    console.log(response);
                    if(response.data.succes === true){
                        setMessgeVoiture(response.data.message)
                    }
                })
        }

     
    }



    const uploadFile1 = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading1(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew1(res.data.url);
          setLoading1(false);
          setIdImage1(res.data.id)
          setImageUrl1(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }

    const uploadFile2 = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading2(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew2(res.data.url);
          setLoading2(false);
          setIdImage2(res.data.id)
          setImageUrl2(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }

    const uploadFile3 = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading3(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew3(res.data.url);
          setLoading3(false);
          setIdImage3(res.data.id)
          setImageUrl3(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }

    const uploadFile4 = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading4(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew4(res.data.url);
          setLoading4(false);
          setIdImage4(res.data.id)
          setImageUrl4(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }

    const uploadFile5 = async(e) => {
        const files = e.target.files
        //console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')
       
        setLoading5(true)
        const res = await axios.post("http://localhost:5000/upload/upload", data)
        .then((res) => {
          setImageNew5(res.data.url);
          setLoading5(false);
          setIdImage5(res.data.id)
          setImageUrl5(res.data.url)
          //console.log(res.data)
          })
         // console.log(res)
    }


    return (
        <div>
         <Presentation/>
            {/* <h1> DetailVoiture</h1> */}
           <Container>

                   {/* <div className="mesBoutonsModifications">
                       <a onClick={handleShow} className="modifierVoiture"> Modifier </a>
                       <a className="SupprimerVoiture" onClick={() => {SupprimerVoiture()}}> Supprimer </a>
                       <a className="modifierVoiture" onClick={handleShow1}> ModifierAccessoire </a>
                       <a className="modifierVoiture" onClick={handleShow2}> Ajouter Image </a>
                       <a className="modifierVoiture" onClick={()=> Actualiser()}> Actualiser accessoire </a>
                    </div><br/> */}

                         <Container>
                             <Row style={{padding:5}}>
                                <Col onClick={handleShow} className="modifierVoiture"> Modifier </Col><br/><br/>
                                <Col className="SupprimerVoiture" onClick={() => {SupprimerVoiture()}}> Supprimer </Col>
                                {/* <Col className="modifierVoiture" onClick={handleShow1}> ModifierAccessoire </Col> */}
                                <Col className="modifierVoiture" onClick={handleShow2}> Ajouter Image </Col>
                                <Col className="modifierVoiture" onClick={()=> Actualiser()}> Actualiser Page </Col>
                             </Row>
                         </Container>

                 {data.map((voiture) => {
                return(
                    <div>
                        <Row>
                            <Col > 
                              <Row>
                                <Col sm={3}>
                                     <div className="imageDetail1">
                                        <img src={voiture.image.url} className="imageDetail"/> 
                                     </div>
                                </Col>
                                <Col sm={3} className="monCol">
                                        <div>
                                        <h5 className="mesTitres">Mes Accesoires</h5>
                                            <p> <span className="caracteristque"> Marque: </span> {voiture.marque}</p>
                                            <p> <span className="caracteristque"> Couleur: </span>  {voiture.couleur}</p>
                                            <p> <span className="caracteristque"> Etat: </span> {voiture.etat}</p>
                                            <p> <span className="caracteristque">Habitacle: </span>{voiture.habitacle}</p>
                                            <p> <span className="caracteristque">indice: </span>{voiture.indice}</p>
                                            <p> <span className="caracteristque">model: </span>{voiture.model}</p>
                                            <p> <span className="caracteristque">nombre Portières:</span>{voiture.portières}</p>
                                            {/* <Button variant="primary" onClick={handleShow}>
                                                Modifier
                                            </Button> */}
                                            {/* <a className="" onClick={()=> {ModifierVoiture()}}>Modifier une Voiture</a> */}
                                        </div>
                                    </Col>

                                    <Col sm={3}>
                                    <div style={{marginLeft:30}}>
                                    <h5 className="mesTitres">Mes Caracteristiques</h5>
                                        <p> <span className="caracteristque"> Prix:</span> {voiture.prix} Euro</p>
                                        <p> <span className="caracteristque"> Prix approximatif: </span>{voiture.prixApproximatif}</p>
                                        <p><span className="caracteristque"> Puissance: </span>{voiture.puissance}</p>
                                        <p> <span className="caracteristque">Qualité: </span>{voiture.qualitéVoiture}</p>
                                        <p> <span className="caracteristque">Rapports: </span>{voiture.rapports}</p>
                                        <p> <span className="caracteristque"> Type:</span> {voiture.typeVehicule}</p>
                                        {/* <a className="SupprimerVoiture" onClick={() => {SupprimerVoiture()}}> Supprimer </a> */}
                                        
                                    </div>

                                    </Col>
                                    <Col>
                                        <div>
                                            {detailVoitureAccessoire.map((accessoireVoiture)=>{
                                                return(
                                                    <div>
                                                        <h5 className="mesTitres">Mes Accesoires</h5>
                                                        <p>
                                                             <span>{accessoireVoiture.bluetooth}</span><br/>
                                                             <span>{accessoireVoiture.aireDeStationnement}</span><br/>
                                                             <span>{accessoireVoiture.ABS}</span><br/>
                                                             <span>{accessoireVoiture.radio}</span><br/>
                                                             <span>{accessoireVoiture.visiteTechnique}</span><br/>
                                                             <span>{accessoireVoiture.jantes}</span><br/>
                                                             <span>{accessoireVoiture.tempomat}</span><br/>
                                                             <span>{accessoireVoiture.toitOuvrant}</span><br/>
                                                             <span>{accessoireVoiture.systemeNavigation}</span><br/>
                                                             <span>{accessoireVoiture.siegeChauffant}</span><br/>
                                                             <span>{accessoireVoiture.siegeMassant}</span><br/>
                                                             <span>{accessoireVoiture.phares}</span><br/>
                                                        </p>
                                                        <a className="modifierVoiture"  onClick={()=> {ActualiserAccessoire(accessoireVoiture._id)}}>Actualiser compte</a>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                   </Col>
                                <span> {message} </span>
                              </Row>
                            </Col>
                        </Row>
                    </div>
                )
            })}
           </Container>

        

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier Les cararcteristiques d'une voiture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* const {image,marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif,qualitéVoiture} */}
               <div style={{display:'flex'}}>
                <div>
                    <input type="text" placeholder="Modifier la marque" onChange={(event)=> setMarqe(event.target.value)}/><br/><br/>
                    <input type="text" placeholder="Modifier le model" onChange={(event)=> setModel(event.target.value)}/><br/><br/>
                    <input type="date" placeholder="Modifier l'immatriculation" onChange={(event)=> setImmatriculation(event.target.value)}/><br/><br/>
                    <input type="text" placeholder="Modifier le moteur" onChange={(event)=> setMoteur(event.target.value)}/><br/><br/>
                    <input type="text" placeholder="Modifier la puissance" onChange={(event)=> setPuissance(event.target.value)}/><br/><br/>
                    <input type="text" placeholder="Modifier l indice" onChange={(event)=> setIndice(event.target.value)}/><br/><br/>
                    <input type="text" placeholder="Modifier le rapport" onChange={(event)=> setRapports(event.target.value)}/><br/><br/>
                </div>
                <div style={{marginLeft:10}}>
                <input type="text" placeholder="Modifier le type de vehicule" onChange={(event)=> setTypeVehicule(event.target.value)}/><br/><br/>
                <input type="number" placeholder="Modifier le nombre de portières" onChange={(event)=> setPortières(event.target.value)}/><br/><br/>
                <input type="text" placeholder="Modifier la couleur" onChange={(event)=> setCouleur(event.target.value)}/><br/><br/>
                <input type="text" placeholder="Modifier l'habitacle" onChange={(event)=> setHabitacle(event.target.value)}/><br/><br/>

                {/* <input type="text" placeholder="Modifier l'etat" onChange={(event)=> setEtat(event.target.value)}/><br/><br/> */}
               
                
                <select onchange={(event) => setEtat(event.target.value)}>
                    <option value="état de votre voiture" selected disabled>état de votre voiture</option>
                    <option value="Neuve">Neuve</option>
                    <option value="Occasion">Occasion</option>
                </select><br /><br />
               


                <input type="number" placeholder="Modifier le prix de la voiture" onChange={(event)=> setPrix(event.target.value)}/><br/><br/>
                {/* <input type="text" placeholder="Modifier la Qualité" onChange={(event)=> setQualiteVoiture(event.target.value)}/><br/><br/> */}
               
                <select onChange={(event) => setQualiteVoiture(event.target.value)}>
                    <option value="Entrer le type" selected disabled>Type de Voiture</option>
                    <option value="Luxe">Luxe</option>
                    <option value="Fourgonette">Fourgonette</option>
                    <option value="Occasion">Occasion</option>
                </select><br /><br />
               

                <span> {messageModification}</span>
                </div>
               </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={EffectuerModification}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            {/* moddification accessoire */}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier Accessoire</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* const {image,marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif,qualitéVoiture} */}
               <div style={{display:'flex'}}>
               
                <div>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="bluetooth" onChange={(event)=> {setBluetooth(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Bluetooth </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="aireConditionné" onChange={(event)=> {setAireConditionné(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Aire Condicioné(A/C) </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="aireDeStationnement" onChange={(event)=> {setAireConditionné(event.target.value)}}/>
  <label htmlfor="vehicle1"> Aide au stationnement </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Abs" onChange={(event)=> {setAbs(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Abs </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="radio" onChange={(event)=> {setRadio(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Radio </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="kitMainLibre" onChange={(event)=> {setKitMainLibre(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Kit main Libre </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="visiteTechnique" onChange={(event)=> {setVisiteTechnique(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Visite Technique </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="jantes" onChange={(event)=> {setJantes(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Jantes </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="tempomat" onChange={(event)=> {setTampomat(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Tempomat </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="toitOuvrant" onChange={(event)=> {setToitOuvrant(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Toit Ouvrant / panorama </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="systemeNavigation" onChange={(event)=> {setSystemeNavigation(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Systeme de navigation </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="siegeChauffant" onChange={(event)=> {setSiegeChauffant(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Sièges chauffants </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="siegeMassant" onChange={(event)=> {setSiegeMassant(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Sièges massants </label><br />
  <input type="checkbox" id="vehicle1" name="vehicle1" value="phares" onChange={(event)=> {setPhares(event.target.value)}}/> 
  <label htmlfor="vehicle1"> Phares Xénon/LED</label><br />
  
  <span>{messageVoiture}</span>
  
</div>

               </div>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={ModifierAccessoire}>
                            Modifier Accessoire
                        </Button>
                    </Modal.Footer>
              </Modal>

                {/* je teste ma modification */}
            
                <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier Accessoire</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* const {image,marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif,qualitéVoiture} */}
             
               
                <div>
                       <input type="file" onChange={uploadFile}/><br/><br/>
                        {/* {loading ?  (<p>Loading ....</p>) : (<img src={imageNew} className="imageTelecharger"/>)} */}

                        <input type="file" onChange={uploadFile1}/><br/><br/>
                        {/* {loading1 ?  (<p>Loading ....</p>) : (<img src={imageNew1} className="imageTelecharger"/>)} */}
                                {/* on avait 2 */}
                        <input type="file" onChange={uploadFile2}/><br/><br/>
                        {/* {loading2 ?  (<p>Loading ....</p>) : (<img src={imageNew2} className="imageTelecharger"/>)} */}

                        <input type="file" onChange={uploadFile3}/><br/><br/>
                        {/* {loading3 ?  (<p>Loading ....</p>) : (<img src={imageNew3} className="imageTelecharger"/>)} */}

                        <input type="file" onChange={uploadFile4}/><br/><br/>
                        {/* {loading4 ?  (<p>Loading ....</p>) : (<img src={imageNew4} className="imageTelecharger"/>)} */}

                        <input type="file" onChange={uploadFile5}/><br/><br/>
                        {/* {loading5 ?  (<p>Loading ....</p>) : (<img src={imageNew5} className="imageTelecharger"/>)} */}

                        <span style={{color:"red"}}>{messageVoiture}</span>
                        
               </div>

                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={AjouterImage}>
                            Ajouter Image
                        </Button>
                    </Modal.Footer>
              </Modal>
           

            <Footer/>
        </div>
    );
};

export default DetailVoiture;