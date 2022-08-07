import React from "react";
import { Link } from "react-router-dom";

export default class CreateUserPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",

            successMessage:'',
            errorMessage:'',

            isLoading:false
        }
    }



    createUserApiCall(){

        this.setState({isLoading:true,errorMessage:''})
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"firstname":this.state.firstname,"lastname":this.state.lastname,"email":this.state.email,"phone":this.state.phone,"password":this.state.password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/create-account", requestOptions)
        .then(response => response.json())
        .then(result =>{
             console.log(result)
            
             if (result.success === false) {
                 this.setState({ errorMessage: result.message })
             } else {
                this.setState({ successMessage: result.message })
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
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user"  onSubmit={ (e)=>{
                                e.preventDefault();

                                this.createUserApiCall();
                            } } >
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" onChange={ (e)=>{ this.setState({ firstname: e.target.value }) } } />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name" onChange={ (e)=>{ this.setState({ lastname: e.target.value }) } }  />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" onChange={ (e)=>{ this.setState({ email: e.target.value }) } }  />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" placeholder="phone" onChange={ (e)=>{ this.setState({ phone: e.target.value }) } } />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                              placeholder="Password" onChange={ (e)=>{ this.setState({ password: e.target.value }) } } />
                                    </div>
                                </div>
                                

                               

                                {
                                    this.state.isLoading === false ?

                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Register Account
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
                                <Link to={ '/auth' } className="small"  >Already have an account? Login!</Link>
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