import React from "react";
import Navbar from "../components/Navbar";

export default class AboutPage extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <Navbar />

        about page
      </div>
    );
  }


}