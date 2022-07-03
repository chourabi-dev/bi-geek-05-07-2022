import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default class NotFound extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <Navbar />



        <div className="container">
            <div className="mt-5 text-center">
                <h1 className="">Oups, Not found</h1>

                <Link to='/home'>back to home</Link>

                <button onClick={ ()=>{
                    
                    // redirect to /path

                    this.props.history.push('/home');

                } } >Back to home</button>

            </div>
        </div>

        
        
      </div>
    );
  }


}