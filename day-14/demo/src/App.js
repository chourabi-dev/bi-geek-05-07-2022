import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import UsersList from "./pages/UsersLisr";


export default class App extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <Router>


          <Switch>

          <Route path={ '/' } component={ HomePage } exact />
         
          <Route path={ '/about' } exact component={ AboutPage }  />
          
          <Route path={ '/home' } exact component={ HomePage }  />
          


          <Route path={ '/users' } exact component={ UsersList }  />
          
          <Route path={ '/user/:id' } exact component={ User }  />
          
          <Route path={ '*' } component={ NotFound }  />
          

          
            

          </Switch>

        </Router>
      </div>
    );
  }


}