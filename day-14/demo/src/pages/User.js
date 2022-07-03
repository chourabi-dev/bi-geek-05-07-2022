import React from "react";
import Navbar from "../components/Navbar";

export default class User extends React.Component{
  constructor(props){
    super(props)


    console.log(props);

    this.state = {
        id: props.match.params.id
    }
  }


  render(){
    return(
      <div>
        <Navbar />

         <p>Loading user N° { this.state.id } info</p>
      </div>
    );
  }


}