import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateUserPage from './pages/CreateUser';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ClientsPage from './pages/clients/ClientsList';
import AddNewClient from './pages/clients/AddClient';
import EditClient from './pages/clients/EditClient';
import ClientVehiculesList from './pages/clients/VehiculeList';
import AddNewClientVehicule from './pages/clients/AddVehicule';
import VehiculeDetails from './pages/Interventions';


export default class App extends React.Component{
  constructor(props){
    super(props)
  }
 

  render(){
    return(
      <div>

      <Router>
     
      
        <Switch>
            <Route path={ '/' } component={ HomePage } exact/>

            <Route path={ '/home' } component={ HomePage } exact/>

            <Route path={ '/create-user' } component={CreateUserPage} exact/>
            <Route path={ '/auth' } component={ AuthPage } exact/>

            <Route path={ '/clients' } component={ ClientsPage } exact/>
            <Route path={ '/clients/add' } component={ AddNewClient } exact/>
            <Route path={ '/clients/edit/:id' } component={ EditClient } exact/>
            

            <Route path={ '/clients/vehicules/:id' } component={ ClientVehiculesList } exact/>
            
            <Route path={ '/clients/vehicules/add/:id' } component={ AddNewClientVehicule } exact/>
            

            <Route path={ '/clients/vehicules/historic/:id' } component={ VehiculeDetails } exact/>
            

            
            

            

        </Switch> 
      </Router>

      </div>
    );
  }
}

 
