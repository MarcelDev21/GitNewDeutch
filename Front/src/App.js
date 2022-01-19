import React from 'react';
import { Button , Col } from 'react-bootstrap';
import { Route , Switch } from 'react-router-dom';
import HeaderNavigation from './Navigation/HeaderNavigation';
import Accueil from './Pages/Accueil'
import VoitureOccasion from './Pages/VoitureOccasion'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import AfficheVoiture from './Pages/AfficheVoiture'
import DetailVoiture from './Pages/DetailVoiture'
import VoitureLuxeDetail from './Pages/VoitureLuxeDetail'
import VoitureLuxe from './Pages/VoitureLuxe'
import Fourgonette from './Pages/Fourgonette'
import PrivateRoute from './Pages/PrivateRoute';
const App = () => {
  return (
    <div className="app">
       <HeaderNavigation/>
       
        <Switch>
            <Route path="/" exact render={() => <Accueil/>}/>
            <Route path="/accueil" exact render={() => <Accueil/>}/>
            <Route path="/VoitureOccasion" exact render={() => <VoitureOccasion/>}/>
            <Route path="/VoitureLuxe" exact render={() => <VoitureLuxe/>}/>
            <Route path="/Login" exact render={()=> <Login/>}/>
            <Route path="/Admin" exact render={()=> <Admin/>}/>
            <Route path="/AfficheVoiture" exact render={() => <AfficheVoiture/>}/>
            <Route path="/DetailVoiture/:id" exact render={() => <DetailVoiture/>}/>
            <Route path="/VoitureLuxeDetail/:id" exact render={() => <VoitureLuxeDetail/>}/>
            <Route path="/Fourgonette" exact render={() => <Fourgonette/>}/>
        </Switch>
    </div>
  );
};

export default App;
