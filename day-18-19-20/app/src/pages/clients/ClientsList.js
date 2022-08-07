import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../comps/Navbar";
import SideMenu from "../../comps/Sidemenu";



export default class ClientsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clients: [],
            errorMessage:''
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



    getClientsListAPI(){
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/clients/list", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.setState({
                clients:result. clients
            })
          })
          .catch(error => {
            this.setState({
                errorMessage: 'something went wrong, please try again later.'
            })
        })
    }



    componentDidMount(){

        this.checkAuth();
        this.getClientsListAPI();
    }


    deleteClient(id){

        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        


        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/clients/delete?id="+id, requestOptions)
          .then(response => response.json())
          .then(result => {
                if (result.success === true) {
                    this.getClientsListAPI();
                }else{

                }
          })
          .catch(error => {
            this.setState({
                errorMessage: 'something went wrong, please try again later.'
            })
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

                   
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Clients</h1>
                        <Link to={ '/clients/add' }   class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add</Link>
                    </div>



                    <div className="card">
                        <div className="card-body table-responsive">

                                {
                                    this.state.errorMessage !== '' ?
                                    <div className="alert alert-danger">{ this.state.errorMessage }</div> : null
                                }

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>CIN</th>
                                        <th>Actions</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.clients.map((client)=>{
                                            return(
                                                <tr>
                                                    <td>{ client._id }</td>
                                                    <td>{ client.name }</td>
                                                    <td>
                                                        <a href={"mailto:"+client.email}>{ client.email }</a>
                                                    </td>
                                                    <td>{ client.address }</td>
                                                    <td><a href={"tel:"+client.phone}>{ client.phone }</a></td>
                                                    <td>{ client.cin }</td>
                                                    
                                                    <td>

                                                        <button onClick={ ()=>{
                                                            this.deleteClient(client._id)
                                                        } }  className="btn btn-danger btn-sm  " style={ { marginRight:15 } }><i className="fas fa-trash"></i></button>
                                                    



                                                    
                                                        <Link to={ '/clients/edit/'+client._id } style={ { marginRight:15 } } className="btn btn-secondary btn-sm"><i className="fas fa-edit"></i></Link>
                                                    

                                                        <Link to={ '/clients/vehicules/'+client._id }    className="btn btn-warning btn-sm  " ><i class="fas fa-car"></i></Link>
                                                    


                                                    </td>
                                                    
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
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