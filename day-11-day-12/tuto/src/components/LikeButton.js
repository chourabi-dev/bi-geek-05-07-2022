import React from "react";

export default class LikeButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nbrLikes : 15,
            stateLike : false
        }
    }



    render(){ 

        return(
           
                <button  onClick={ ()=>{
                     
                    // SUPER WRONG
                    //this.state.nbrLikes = 20

                    this.setState({
                        nbrLikes : this.state.stateLike === false ? (  this.state.nbrLikes +1 ) : (  this.state.nbrLikes -1 ),
                        stateLike : ! this.state.stateLike
                    }) 
                    
                } }   >
                    
                { this.state.nbrLikes } 

                { this.state.stateLike === true ? 'dislike' : 'like' }</button>
            
        );
    }
}