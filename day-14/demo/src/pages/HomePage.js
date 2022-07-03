import React from "react";
import Navbar from "../components/Navbar";

export default class HomePage extends React.Component{
  constructor(props){
    super(props);

    console.log(props);
  }


  render(){
    return(
      <div>
        <Navbar />
        home page
      </div>
    );
  }


}