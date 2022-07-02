import React from "react";

export default class ToggleSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active : false
        }
    }




    render(){
        return(
            <div onClick={ ()=>{ this.setState({ active: ! this.state.active }) } } className= {   this.state.active === false  ? 'switch'  : 'switch active'   } > <div></div> </div>
        );
    }
}