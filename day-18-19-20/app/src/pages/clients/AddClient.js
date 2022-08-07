import React from "react";
import Navbar from "../../comps/Navbar";
import SideMenu from "../../comps/Sidemenu";



export default class AddNewClient extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            cin:"",
            address:"",
            email:"",
            phone:"",



            successMessage:'',
            errorMessage:'', 
            isLoading:false
        }
    }



    checkAuth(){
        if (localStorage.getItem('token') != null) {
            const token = localStorage.getItem('token');

            // check server !!

            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);

                var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("http://localhost:8080/api/user/info", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success === false ) {
                        // expired !!!
                        localStorage.clear();

                        // redirect to auth !!!

                        this.props.history.push('/auth');
                    }
                })
                .catch(error => {
                    this.props.history.push('/auth');
                });
        }else{
            this.props.history.push('/auth');
        }
    }
    componentDidMount(){

        this.checkAuth();
    }




    addClientsApi(){
this.setState({isLoading:true,errorMessage:''})
        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token );

        var raw = JSON.stringify({"name":this.state.name,"cin":this.state.cin,"address":this.state.address,"email":this.state.email,"phone":this.state.phone});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/add", requestOptions)
        .then(response => response.json())
        .then(result => {
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
            <div>
                
    <div id="wrapper">

        
        <SideMenu />
        
        <div id="content-wrapper" class="d-flex flex-column">

           
            <div id="content">

                 
                <Navbar />
               

               
                <div class="container-fluid">

                   
                    <h1 class="h3 mb-4 text-gray-800">Add new client</h1>

                    <p className="text-muted">
                        in order to add a new client, please fill out the form down below
                    </p>



                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={ (e)=>{
                                e.preventDefault();
                                this.addClientsApi();
                            } } >
                                <div className="form-group mb-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ name:e.target.value }) } } />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ email:e.target.value }) } }  />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Address</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ address:e.target.value }) } }  />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ phone:e.target.value }) } }  />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">CIN</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ cin:e.target.value }) } }  />
                                </div>

                               


                                
                               

                                {
                                    this.state.isLoading === false ?
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-success">Save</button>
                               </div>
                                     
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



                                
                                
                            </form>
                        </div>
                    </div>

                </div>
              

            </div>
            

           
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
           

        </div>
         

    </div>
    

     
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    
   
            </div>
        );
    }
}