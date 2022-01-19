import React, {useEffect, useState} from 'react';
import Presentation from './Presentation'
import Footer from './Footer'
import {Container,Button,Form,Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Login = () => {
    const [nom,setNom] = useState()
    const [password, setPassword] = useState()
    const [message,setMessage] = useState()
    const history = useHistory()
    const CreateLogin = async() => {
        const urlLogin ="http://localhost:5000/login/login"
        await axios.post(urlLogin,{nom,password}).then((res) => 
        {
        //console.log(res.data.message);
        if(res.data.success === false){
            setMessage(res.data.message)
        }else{
           window.localStorage.token = res.data.token
           history.push('/Admin')
        }
        })
    }
    return (
        <div>
        <Presentation/>
            <Container>
                <div className="login">
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Votre nom</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer votre nom" onChange={(event) => setNom(event.target.value)} />
                                    <Form.Text className="text-muted">
                                    Nous ne donnerons votre nom a aucun autre utilisateur.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <span> {message}</span>
                                {/* <Button variant="primary" type="submit">
                                    Submit
                                </Button> */}
                                <div className="divBtnLogin">
                                     <a className="LoginConnect" onClick={() => CreateLogin()}>Connecter</a>
                                </div>
                    </Form>
                </div>
            </Container>
        <Footer/>       
        </div>
    );
};

export default Login;