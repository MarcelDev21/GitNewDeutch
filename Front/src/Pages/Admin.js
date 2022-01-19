import React,{useState} from 'react';
import Footer from './Footer';
import Presentation from './Presentation';
import {Modal,Button,Row,Col, Container} from 'react-bootstrap'
import axios from 'axios'
import AfficheVoiture from './AfficheVoiture'

const Admin = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    let [monArray, setArray] = useState([])
    const [image,setImage] = useState()
    const [marque, setMarque] = useState()
    const [model, setModel] = useState()
    const [immatriculation, setImmatriculation] = useState()
    const [moteur, setMoteur] = useState()
    const [puissance, setPuissance] = useState()
    const [indice, setIndice] = useState()
    const [rapports, setRapports] = useState()
    const [typeVehicule, setTypeVehicule] = useState()
    const [portières, setPortières] = useState()
    const [couleur, setCouleur] = useState()
    const [habitacle, setHabitacle] = useState()
    const [etat, setEtat] = useState()
    const [prix, setPrix] = useState()
    const [prixApproximatif, setPrixApproximatif] = useState()
    const [qualitéVoiture, setQualitéVoiture] = useState()
    const [message, setMessage] = useState()
    const [Bluetooth,setBluetooth] = useState()
    const [description,setDescription] = useState()
    const [lieuDuVehicule,setLieuDuVehicule] = useState()
    const [idNouvelleVoiture, setIdNouvelleVoiture] = useState()
    const [idAccessoire, setIdAccessoire] = useState()
    const [rechercheMarque, setRechercheMarque] = useState()
   

    let [viewImage, setViewImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [imageNew,setImageNew] = useState("")
    const [idImage, setIdImage] = useState("")
    const [urlImage, setImageUrl] = useState("")
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow1(false);
    const handleShow2 = () => setShow1(true);

    
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
    const [messageAccessoire, setMessageAccessoire] = useState()

    //let [idAccessoireAcces, setIdAccesoireAcces] = useState({id:""})
     let idAccessoireAcces 

    const uploadFile = async(e) =>{
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
    }

    const SaveCar = async() => {
        console.log("etat"+etat)
        //console.log("le nom de votre vehicule" + image,marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,prixApproximatif)
        let id = idImage
        let url = urlImage
        const urlCreerVoiture ="http://localhost:5000/login/creerVoiture"
        await axios.post(urlCreerVoiture,{image:{id,url},marque,model,immatriculation,moteur,puissance,indice,rapports,typeVehicule,portières,couleur,habitacle,etat,prix,description,lieuDuVehicule,prixApproximatif,qualitéVoiture},
            {headers:{"token":window.localStorage.token}}).then((res) => {
                // setArray([res.data.nouvelleVoiture])
                 console.log(res)
                if(res.data.success === true){
                    console.log(res.data.nouvelleVoiture._id)
                    setIdNouvelleVoiture(res.data.nouvelleVoiture._id)
                    setMessage(res.data.message) 
                    alert("Nous vous rappelons que vous devez ajouter les accessoires! c' est Obligatoire")              
                }else{
                    setMessage(res.data.message)  
                }
            }) 
    }



    const Actualiser = async() => {
        //console.log("test")
        const getUrl = "http://localhost:5000/login/recupereVoitue"
        await axios.get(getUrl,{headers:{"token":window.localStorage.token}}).then((res)=> {
            setArray(res.data.getCar)
            //console.log(monArray)
            //GarderIdAccessoire()
        })
    }

    const SaveOpciones = async() =>{
        //console.log(idNouvelleVoiture)
        console.log(idNouvelleVoiture)
        let bluetooth = Bluetooth
        const urlPostOpciones = `http://localhost:5000/login/ajouteAccessoire/${idNouvelleVoiture}`
        await axios.post(urlPostOpciones,{bluetooth,aireConditionné,aireDeStationnement,ABS,radio,kitMainLibre,visiteTechnique,jantes,tempomat,toitOuvrant,systemeNavigation,siegeChauffant,siegeMassant,phares}, {headers:{"token":window.localStorage.token}})
        .then((res) => {
            console.log(res)
            if(!idNouvelleVoiture){
                setMessageAccessoire("Creer une voiture avant d'effectuer un ajout d'accessoire")
            }
        if(res.data.succes === true) {
            //setIdAccessoire(res.data)
            setMessageAccessoire(res.data.message)
            
        }})
    }


    const GarderIdAccessoire = async() => {
        const urlGetAccessoire = `/GarderIdAccessoire/${idAccessoire}`
        await axios.get(urlGetAccessoire,{headers:{"token": window.localStorage.token}})
        .then((res)=> {
           // console.log(res)
        })
    }

    const sendAccesoire = () => {
       // console.log(idAccessoire)
    }

    const AfficheData = monArray.filter((mesVoitures)=> { if(!rechercheMarque){
        return mesVoitures
    }else if(mesVoitures.marque.includes(rechercheMarque)){return mesVoitures}}).map((voiture) => {
        return(
            <Col sm={2} key={voiture._id}>
                <AfficheVoiture Voiture={voiture} idAccesoire={sendAccesoire()}/>
            </Col>
        )
    })

    const envoyer = () => {
       // console.log(ABS)
        //console.log(phares)
    }

    return (
        <div>
            {console.log(window.localStorage.token)}
            <Presentation/>
               
                <div style={{display:'flex', marginBottom:10}}>

                    <div className="">
                        {/* <a className="ajouterVoiture" onClick={handleShow}> Ajouter une nouvelle Voiture </a>
                        <a className="ajouterVoiture" onClick={handleShow2}> Ajouter Accessoire </a>
                        <a className="ajouterVoiture" onClick={() => Actualiser()}> Actualiser </a> */}


                       
                           <Container>
                            <input type="Text" placeholder="La Marque" onChange={(event)=> setRechercheMarque(event.target.value)}/>
                            <Row style={{padding:2}}>
                                <Col className="ajouterVoiture" onClick={handleShow}>Ajouter une nouvelle Voiture </Col>
                                <Col className="ajouterVoiture" onClick={handleShow2}>Ajouter Accessoire  </Col>
                                <Col className="ajouterVoiture" onClick={() => Actualiser()}>Actualiser </Col>
                            </Row>
                           </Container>
                       
                    </div>  

                
                     <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Ajouter une Voiture</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                         
                        <input type="file" onChange={uploadFile}/><br/><br/>
                        {/* {loading ?  (<p>Loading ....</p>) : (<img src={imageNew} className="imageTelecharger"/>)} */}
                         <img src={viewImage}/>
                      <div style={{display:'flex'}}>
                      <div>
                           <input type="text" placeholder="nom de la marque" onChange={(event) => setMarque(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="model de la voiture" onChange={(event) => setModel(event.target.value)}/><br/><br/>
                           <input type="date" placeholder="premiere immatriculation" onChange={(event) => setImmatriculation(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="type de moteur" onChange={(event) => setMoteur(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="puissance" onChange={(event) => setPuissance(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="indice" onChange={(event) => setIndice(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="type de rapports" onChange={(event) => setRapports(event.target.value)}/><br/><br/>
                           {/* <input type="text" placeholder="Entrer la description et les autres" onChange={(event) => setDescription(event.target.value)}/><br/><br/> */}
                           <textarea onChange={(event)=> setDescription(event.target.value)}> Entrer votre description</textarea>
                          </div>
                          <div style={{marginLeft:30}}>
                           <input type="text" placeholder="type de vehicule" onChange={(event) => setTypeVehicule(event.target.value)}/><br/><br/>
                           <input type="number" placeholder="nombre de portières" onChange={(event) => setPortières(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="Couleur exterieure" onChange={(event) => setCouleur(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="Habitacle" onChange={(event) => setHabitacle(event.target.value)}/><br/><br/>
                           <input type="text" placeholder="lieu Du Vehicule" onChange={(event) => setLieuDuVehicule(event.target.value)}/><br/><br/>
                           {/* <input type="text" placeholder="etat de la voiture" onChange={(event) => setEtat(event.target.value)}/><br/><br/> */}

                           <select onChange={(event) => setEtat(event.target.value)}>
                            <option value="état de votre voiture" selected  disabled>état de votre voiture</option>
                            <option value="Neuve">Neuve</option>
                            <option value="Occasion">Occasion</option>
                          </select><br/><br/>


                           <input type="number" placeholder="prix" onChange={(event) => setPrix(event.target.value)}/><br/><br/>
                           <input type="number" placeholder="prix approximatif de douane" onChange={(event) => setPrixApproximatif(event.target.value)}/><br/><br/>
                           {/* <input type="text" placeholder="Type de  voiture" onChange={(event) => setQualitéVoiture(event.target.value)}/><br/><br/> */}
                          
                           <select onChange={(event) => setQualitéVoiture(event.target.value)}>
                            <option value="Entrer le type" selected  disabled>Type de Voiture</option>
                            <option value="luxe">Luxe</option>
                            <option value="fourgonette">Fourgonette</option>
                            <option value="Occasion">Occasion</option>
                          </select><br/><br/>
                           <span>{message}</span>
                          
                          </div>             
                      </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={SaveCar}>
                            Enregistrer
                        </Button>
                        </Modal.Footer>
                </Modal>




                <Modal show={show1} onHide={handleClose2}>
                        <Modal.Header closeButton>
                        <Modal.Title>Ajouter les Caracteristiques de la voiture</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {/* uno */}

                        {/* dos */}
                         <input type="file" onChange={uploadFile}/><br/><br/>
                        {loading ?  (<p>Loading ....</p>) : (<img src={imageNew} className="imageTelecharger"/>)}
                         <img src={viewImage}/>

                      <div style={{display:'flex'}}>
                      <div>
                           {/* <input type="text" placeholder="Bluetooth" onChange={(event) => setBluetooth(event.target.value)}/><br/><br/> */}
                        
                          
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="bluetooth" onChange={(event)=> setBluetooth(event.target.value)}/>
                            <label htmlFor="vehicle1"> Bluetooth </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="aireConditionné" onChange={(event)=> setAireConditionné(event.target.value)}  />
                            <label htmlFor="vehicle1"> Aire Condicioné(A/C) </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="aireDeStationnement" onChange={(event)=> setAiredeStationnement(event.target.value)}  />
                            <label htmlFor="vehicle1"> Aide au stationnement </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Abs" onChange={(event)=> setAbs(event.target.value)}/>
                            <label htmlFor="vehicle1"> Abs </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="radio" onChange={(event)=> setRadio(event.target.value)}  />
                            <label htmlFor="vehicle1"> Radio </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="kitMainLibre" onChange={(event)=> setRadio(event.target.value)} />
                            <label htmlFor="vehicle1"> Kit main Libre </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="visiteTechnique"  onChange={(event)=> setVisiteTechnique(event.target.value)}/>
                            <label htmlFor="vehicle1"> Visite Technique </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="jantes"  onChange={(event)=> setJantes(event.target.value)}  />
                            <label htmlFor="vehicle1"> Jantes </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="tempomat"  onChange={(event)=> setTampomat(event.target.value)}  />
                            <label htmlFor="vehicle1"> Tempomat </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="toitOuvrant"  onChange={(event)=> setToitOuvrant(event.target.value)} />
                            <label htmlFor="vehicle1"> Toit Ouvrant / panorama </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="systemeNavigation"  onChange={(event)=> setSystemeNavigation(event.target.value)}/>
                            <label htmlFor="vehicle1"> Systeme de navigation </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="siegeChauffant"  onChange={(event)=> setSiegeChauffant(event.target.value)} />
                            <label htmlFor="vehicle1"> Sièges chauffants </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="siegeMassant" onChange={(event)=> setSiegeMassant(event.target.value)} />
                            <label htmlFor="vehicle1"> Sièges massants </label><br />

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="phares"  onChange={(event)=> setPhares(event.target.value)}  />
                            <label htmlFor="vehicle1"> Phares Xénon/LED</label><br />
                       

                          {/* <a href="#" onClick={() => envoyer()}>envoyer </a> */}

                          <span> {messageAccessoire} </span>
                          </div>
                                    
                      </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={SaveOpciones}>
                            Enregistrer
                        </Button>
                        </Modal.Footer>
                </Modal>
                </div>
                     <Row> {AfficheData} </Row>

            <Footer/>
        </div>
    );
};

export default Admin;