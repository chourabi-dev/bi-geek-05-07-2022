import React from "react";
import Parent from "./Parent";

export default class Child extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            message:props.message,
            callParent : props.callParent
        }
    }



    render(){
        return(
        
        <div>
            <h1>hello i'm the child</h1>
            <p>my parent says : { this.state.message }</p>
 
            <button onClick={ ()=>{

                    this.state.callParent("hi parent")

            } } >ansawre parent</button>
        </div>
        
        )
    }
}