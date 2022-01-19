import React, {useState, useEffect} from 'react';
import Presentation from './Presentation';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Row,Col,Container,Carousel, Modal,Button} from 'react-bootstrap'
import Aos from 'aos';
import detail from '../images/detail.png'
import Caracteristique from '../images/caracteristique.png'
import option from '../images/option.png'
import { FaBeer , FaStar, FaStarHalf} from 'react-icons/fa';

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

import 'aos/dist/aos.css';
import ReactWhatsapp from 'react-whatsapp';

const VoitureLuxeDetail = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [accessoires, setAccessoire] = useState({mesAccessoires:[]})
    const [monImageCaroussel, setImageCaroussel] = useState({imageRecupere:[]})
    const [imageGet1, setImageGet1] = useState("")
    const [imageGet2, setImageGet2] = useState("")
    const [imageGet3, setImageGet3] = useState("")
    const [imageGet4, setImageGet4] = useState("")
    const [imageGet5, setImageGet5] = useState("")

    const [marqueAuto, setMarque] = useState()
    const [prixVehicule, setPrix] = useState()
    const [mail,setMail] =useState()
    const [telephone,setTelephone] =useState()
    const [pays,setPays] =useState()
    const [message,setMessage] =useState()
    const [messageMail,setMessageMail] =useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let contenu 
    useEffect(() => {
        Aos.init({duration:3000})
        verifierImage()
        getDataById()
        getVoitureEtAccessoire()
        afficheImageCaroussel()
    }, []);

    const getDataById = async () => {
        const urlGetDataById = `http://localhost:5000/login/RechercheDetailVoiture/${id}`
        await axios.get(urlGetDataById).then((res)=> {setData([res.data.detailVoiture])})
    }



    const getVoitureEtAccessoire = async() => {
        //console.log(id)
        const urlGetVoiture = `http://localhost:5000/login/informationAccesoireVoiture/${id}`
        await axios.get(urlGetVoiture)
        .then((res)=> {
            //console.log("owe")
            console.log(res.data.getIdAccessoire);
            setAccessoire({mesAccessoires:[res.data.getIdAccessoire]})
            setMarque(res.data.getIdAccessoire.marque)
            setPrix(res.data.getIdAccessoire.prix)
            //console.log(marque)
            //console.log(accessoires.mesAccessoires)
        })
    }

    const afficheImageCaroussel = async() => {
        const urlImageCaroussel = `http://localhost:5000/login/recupereImagePourCarousel/${id}`
        await axios.get(urlImageCaroussel).then((res)=> {
            //console.log(res.data.recupereimage);
                    // console.log(res.data.recupereimage.autreImage[0].image1.url)
                        /*if(!res.data.recupereimage.autreImage[0].image1.url) {
                            console.log("nous n avons pas d image")
                        }*/
        
             //console.log(res.data.recupereimage.autreImage.length  )

            if(res.data.recupereimage.autreImage.length == 0)
            {
                //console.log("error")
            }else{
                setImageGet1(res.data.recupereimage.autreImage[0].image1.url)
                setImageGet2(res.data.recupereimage.autreImage[0].image2.url)
                setImageGet3(res.data.recupereimage.autreImage[0].image3.url)
                setImageGet4(res.data.recupereimage.autreImage[0].image4.url)
                setImageGet5(res.data.recupereimage.autreImage[0].image5.url)
                //console.log(imageGet1)
                setImageCaroussel({imageRecupere:[res.data.valuefinal]})
            }
        })
        }


        const verifierImage = () => {
            if(!imageGet1 || imageGet1 === null || !imageGet2 || imageGet2 === null || !imageGet3 || imageGet4 === null || !imageGet4 || imageGet4 === null || !imageGet5 || imageGet5 === null){
                return(
                    <div>
                        <h1 style={{textAlign:'center'}}> vous n avez pas d image d'autres images de cette voiture. Merci!!!!</h1>
                    </div>
                )
            }else{
                return(
                    <div>
                       {accessoires.mesAccessoires.map((res)=>{
                  return(
                      <Container>

            <div className="headerServices">
                <h1>Detail de la Voiture</h1>
                <p>Ces details vous montrent les principales caractéristiques de la voiture</p>
             </div><br/>
                        <Row data-aos="fade-up">
                                {/* <Col sm={6}>
                                     <img src={res.image.url} alt="monImage" className="imageDetailVoiture"/>
                                </Col> */}



            <Col data-aos="fade-up" sm={6}>
                <Carousel>
                    <Carousel.Item interval={3000}>
                       <div className="blocImages">
                        <img
                            className="mesImagesCaroussel"
                            src={res.image.url}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={3000}>
                      <div className="blocImages">
                        <img
                            className="mesImagesCaroussel"
                            src={imageGet2}
                            alt="Second slide"
                            />
                     </div>

                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                        className="mesImagesCaroussel"
                        src={imageGet1}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                    {/* ok */}
                    <Carousel.Item interval={3000}>
                        <img
                        className="mesImagesCaroussel"
                        src={imageGet3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item interval={3000}>
                        <img
                        className="mesImagesCaroussel"
                        src={imageGet4}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item interval={3000}>
                        <img
                        className="mesImagesCaroussel"
                        src={imageGet5}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>{res.marque} {res.model}</h3>
                        <p>Faites confiance a DeutshAutomoto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>

                                <Col sm={6}>
                                    <h3> <span className="titreMarque"> Marque:</span>  {res.marque} {res.model} </h3>

                                        <div className="mesFabsPositions">
                                            <FaStar className="fabe"/>
                                            <FaStar className="fabe"/>
                                            <FaStar className="fabe"/>
                                            <FaStar className="fabe"/>
                                            <FaStar className="fabe"/>
                                        </div><br/>

                                     <div className="mesImagesDiv3">
                                        <h3 > <span className="etatPrincipal"> état de la voiture: </span>{res.etat} </h3>
                                        <h3 ><span className="etatPrincipal">  Qualité de la voiture:</span>{res.qualitéVoiture} </h3>
                                        <h3 > <span className="etatPrincipal"> Prix de la voiture:</span>{res.prix} Euro</h3>
                                     </div>

                                     <hr style={{width:300, textAlign:'center',marginLeft:20, height:5, color:"lime"}}/>
                                    <br/>
                                   <div>
                                        <a className="ContacterDeutsh" >Contacter:+34 89763579736</a>
                                        <a className="ContacterDeutsh" onClick={handleShow}>Contacter par email</a>
                                   </div>
                                    {/* <a className="bout" onClick={()=> {afficheImageCaroussel()}}>bouton</a> */}
                                </Col>
                        </Row><br/>
                         <Row data-aos="fade-up">
                         <div  className="headerServices">
                            <h1>Accessoire de la Voiture</h1>
                            <p>Nous présentons les principaux kits et accessoires de la voiture</p>
                        </div><br/>

                             <Col sm={4} >
                                <div className="mettre_card">
                                    <h2 className="mesInfos"> Information Vehicule:</h2>
                                    <span> <span className="mesCriteres"> Marque: </span> {res.marque}</span> <br/><br />
                                    <span> <span className="mesCriteres">Model:</span>  {res.model}</span> <br/><br />
                                    <span> <span className="mesCriteres"> Portières:</span> {res.portières}</span> <br/><br />
                                    <span> <span className="mesCriteres">Prix:</span>  {res.prix} Euro</span> <br/><br />
                                    <span> <span className="mesCriteres"> Rapports: </span>{res.rapports}</span> <br/><br />
                                    <span> <span className="mesCriteres">Type de vehicule: </span>{res.typeVehicule}</span> <br/><br />
                                    <span> <span className="mesCriteres">Etat de la voiture: </span>{res.etat}</span>  <br/><br />
                                    <span> <span className="mesCriteres">Lieu de la voiture: </span>{res.lieuDuVehicule}</span>  
                                </div>   
                             </Col>
                             <Col sm={4} >
                               <div className="mettre_card">
                                    <h2> Autres Caractéristiques:</h2>
                                    <span> <span className="mesCriteres">Couleur:</span>  {res.couleur}</span> <br/><br />
                                    <span> <span className="mesCriteres">Etat: </span>{res.etat}</span> <br/><br/>
                                    <span> <span className="mesCriteres">Habitacle: </span>{res.habitacle}</span> <br/><br/>
                                    <span> <span className="mesCriteres"> Immatriculation:  </span>{res.immatriculation}</span> <br/><br/>
                                    <span> <span className="mesCriteres"> Indice: </span>{res.indice}</span> <br/><br/>
                                    {/* <p> <span className="mesCriteres">portières: </span>{res.portières}</p> 
                                    <p> <span className="mesCriteres">portières: </span>{res.portières}</p>  */}
                                    <span> <span className="mesCriteres">Lieu de la Voiture: </span>{res.lieuDuVehicule}</span> <br/><br/>
                                    <span> <span className="mesCriteres">Description: </span>{res.description}</span> <br/>
                                    
                               </div>
                             </Col>
                             <Col sm={4} className="mettre_card">
                             <h2> Accessoires:</h2>
                             {res.AccessoireSchema.map((res)=> {
                                 return(
                                 <div>
                                     <p> 
                                        <span>{res.ABS}</span><br/>
                                        <span>{res.aireConditionné}</span><br/>
                                        <span>{res.aireDeStationnement}</span><br/>
                                        <span>{res.bluetooth}</span><br/>
                                        <span>{res.jantes}</span><br/>
                                        <span>{res.phares}</span><br/>
                                        <span>{res.radio}</span><br/>
                                        <span>{res.siegeChauffant}</span><br/>
                                        <span>{res.systemeNavigation}</span><br/>
                                        <span>{res.tempomat}</span><br/>
                                        <span>{res.toitOuvrant}</span><br/>
                                        <span>{res.visiteTechnique}</span><br/>
                                     </p>
                                 </div>)})}
                             </Col>
                         </Row>
                      </Container>
                  )
              })}
                    </div>
                )
            }
        }


        const envoyerMail = async() => {
            console.log(mail)
            console.log(message)
            console.log(telephone)
            console.log(pays)

            let leMessage 
            if(message== undefined){
                leMessage=contenu
                console.log(leMessage)
            }else{
                leMessage=message
                console.log(leMessage)
            }
            const urlSendMessage="http://localhost:5000/login/sendMail"
            await axios.post(urlSendMessage, {messages:{telephone,leMessage,pays},"email":mail})
            .then((res)=> {console.log(res);
                if(res.data.succes === true){
                    setMessageMail(res.data.message)
                }
            })
        }

        const AfficheModal = () => {
            const ma_marque= "putain"
            contenu = `Bonjour , Je suis intéressé par votre Voiture de marque ${marqueAuto} qui coute ${prixVehicule}Euro.J'aimerais obtenir plus de détails sur le véhicule.Pouvez-vous me contacter ?
            Merci`
            return(
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Envoyer Un Mail A DeutchAutomoto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Entrer Votre Mail:</label><br/>
                    <input className="inputContactDeutch" type="email" placeholder="entrer votre email" onChange={(event)=> setMail(event.target.value)}/><br/><br/>

                    <label>Votre telephone Whatsapp:</label><br/>
                    <input className="inputContactDeutch" type="number" placeholder="entrer votre numerro de téléphone whatsapp" onChange={(event)=>setTelephone(event.target.value)}/><br/><br/>

                    <label>Votre Pays actuel:</label><br/>
                    <input className="inputContactDeutch" type="text" placeholder="Dans quel pays êtes vous actuellement" onChange={(event)=>setPays(event.target.value)}/><br/><br/>

                    <div>
                        <label htmlFor="w3review">Entrer votre message:</label><br/>
                        <textarea id="w3review" name="w3review" rows={5} cols={43} defaultValue={contenu} onChange={(event)=> setMessage(event.target.value)} />
                    </div>

                 
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="j'accepte que mes données puissent être utiles pour me contacter" />
                    <label htmlFor="vehicle1"> Bonjour <br/><span> j'accepte recevoir les appels et mails de Deutch automoto pour plus d'informations</span></label><br />
                   
                    <span> {messageMail}</span>


               
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button onClick={envoyerMail}>
                    Enregistrer
                </Button>
                </Modal.Footer>
        </Modal>
            )
        }

    return (
        <div>
        {/* {console.log(accessoires.mesAccessoires)} */}
            <Presentation/><br/>
             {verifierImage()}
             {AfficheModal()}
            <Footer/>
        </div>
    );
};

export default VoitureLuxeDetail;