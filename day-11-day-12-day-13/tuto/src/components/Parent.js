import React from "react";
import Child from "./Child";

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reponseFromChild: ''
        }


        this.callFromMyChild  = this.callFromMyChild.bind(this);
    }


    callFromMyChild(str){
        console.log(str);

        this.setState({ reponseFromChild : str })
    }



    render(){
        return(
            <div>
                <h1>Hello i'm the parent</h1>

                <p>I'm calling my child</p>


                <p>response : { this.state.reponseFromChild }</p>

                <Child  callParent={ this.callFromMyChild }   message="hello child" />
            </div>
        )
    }
}