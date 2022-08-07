import React from "react";
import { Link } from "react-router-dom";

export default class AuthPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
            email:"", 
            password:"",

            successMessage:'',
            errorMessage:'',

            isLoading:false
        }
    }



    authUserApiCall(){

        this.setState({isLoading:true,errorMessage:''})
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":this.state.email,"password":this.state.password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth", requestOptions)
        .then(response => response.json())
        .then(result =>{
             console.log(result)
            
             if (result.success === false) {
                 this.setState({ errorMessage: result.message })
             } else {
               
                localStorage.setItem('token',result.token);

                // redirect to home

                this.props.history.push('/home');
                

             }
            
            
            })
        .catch(error => {
            this.setState({
                errorMessage: 'something went wrong, please try again later.'
            })
        }).finally(()=>{
            this.setState({isLoading:false})
        })
    }



    render(){
        return(
            <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                 
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Log in !</h1>
                            </div>
                            <form className="user"  onSubmit={ (e)=>{
                                e.preventDefault();


                                this.authUserApiCall();
                                
                            } } >
                                
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" onChange={ (e)=>{ this.setState({ email: e.target.value }) } }  />
                                </div>
                                
                                
                                <div className="form-group">
                                        <input type="password" className="form-control form-control-user"
                                              placeholder="Password" onChange={ (e)=>{ this.setState({ password: e.target.value }) } } />
                                    </div>
                                

                               

                                {
                                    this.state.isLoading === false ?

                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Connect
                                    </button>
                                : 
                                    <div className="text-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                        
                                    </div> 
                                }




                                {
                                    this.state.successMessage !== '' ?
                                    <div className="alert alert-success">{ this.state.successMessage }</div> : null
                                }


                                {
                                    this.state.errorMessage !== '' ?
                                    <div className="alert alert-danger">{ this.state.errorMessage }</div> : null
                                }


                                <hr />
                                
                            </form>
                            <hr />
                            
                            <div className="text-center">
                                <Link to={ '/create-user' } className="small" >You don't have an account ? create one for free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        );
    }
}