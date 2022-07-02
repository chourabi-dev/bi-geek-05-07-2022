import React from "react";
import Parent from "./Parent";

export default class Forms extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            fullname:'',
            fullnameError:'',
            fullnameValid: false,


            email:'',
            emailError:'',
            emailValid: false,



            supp:[
                { id:'S_1' , name:'Jambon' },
                { id:'S_2' , name:'Hrisa' },
                { id:'S_3' , name:'Olive' },
                
            ],


            suppUser:[],


            option: 'ID_1',


            country:'',
            countries: [
                { id:'TN', name:'Tunisia' },
                { id:'FR', name:'France' },
                { id:'USA', name:'United State' },
                
            ]
            
        }
    }



    checkEmail(event){
        const val = event.target.value;

        this.setState({
            email:val
        })

        if ( val === '') {
            this.setState({
                emailError:'this feild is required'
            })
        }else{
            if (val.indexOf('@') == -1 ) {
                this.setState({
                    emailError:'this feild must be an email'
                })
            }else{
                this.setState({
                    emailError:'',
                    emailValid:true
                })
            }
        }

    }



    render(){
        return(
        
        <div>
            <form onSubmit={ (event)=>{
                
                event.preventDefault();

                console.log(this.state);

            } } >
                <div>
                    <label htmlFor="">Fullname</label> <br />
                    <input 
                    type="text" 
                    onFocus={ (event)=>{
                        this.setState({
                            fullnameError:'min length = 5'
                        })
                    } }
                    onChange={ (event)=>{ 
                        
                        this.setState({ fullname:event.target.value }) 
                    
                        // min length 5

                        if (event.target.value.length < 5) {
                            this.setState({
                                fullnameError:'min length = 5'
                            })
                        }else{
                            this.setState({
                                fullnameError:'',
                                fullnameValid:true
                            })
                        }
                    
                    }

                    
                    } 
                    value={ this.state.fullname } />
                    <p style={ { color:'red' } }>{ this.state.fullnameError }</p>
                </div> 




                <div>
                    <label>Email</label> <br />

                    <input type="email" onChange={(event)=>{
                        this.checkEmail(event);
                    }} 
                    
                    value={this.state.email}



                    /> <br />
                     <p style={ { color:'red' } }>{ this.state.emailError }</p>
                </div>



                <ul>
                    
                    {
                        this.state.supp.map((s)=>{
                            return( <li> <input type="checkbox" onChange={ (e)=>{
                                console.log(e.target.checked);

                                if (e.target.checked === true) {

                                    let tmp = this.state.suppUser;
                                    tmp.push(s)
                                    this.setState({
                                        suppUser : tmp
                                    })

                                }
                            } } />  <label htmlFor="">{ s.name }</label> </li>)
                        })
                    }
                </ul>



                <hr/>

                
                <ul>
                    
                    {
                        this.state.suppUser.map((s)=>{
                            return( <li>  <label htmlFor="">{ s.name }</label> </li>)
                        })
                    }
                </ul>
                


                <div>

                    <label htmlFor="">option 1</label> 
                    <input 
                    onChange={  ()=>{this.setState({ option:'ID_1' }) } } 
                    checked={ this.state.option==='ID_1' ? true : false } 
                    value={ 'ID_1' } name="opt" type="radio" />


                    <label htmlFor="">option 2</label> 
                    <input   
                    onChange={ ()=>{this.setState({ option:'ID_2' }) } } 
                    checked={ this.state.option==='ID_2' ? true : false }  
                    value={ 'ID_2' } name="opt" type="radio" />
                    

                </div>



                <div>
                    <label htmlFor="">Country</label><br />

                    <select onChange={ (e)=>{  
                        this.setState({
                            country : e.target.value
                        })
                     } }>
                        <option value="">Please choose a country</option>
                        {
                            this.state.countries.map((c)=>{
                                return <option value={c.id}>{c.name}</option>
                            })
                        }
                        
                    </select>
                </div>
                



                <div>
                    <button type="submit" 
                    
                    disabled={ (this.state.fullnameValid === false) || ( this.state.emailValid === false) }>Valider</button>
                </div>
            </form>
        </div>
        
        )
    }
}