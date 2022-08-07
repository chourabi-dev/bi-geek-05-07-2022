import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../comps/Navbar";
import SideMenu from "../../comps/Sidemenu";



export default class ClientVehiculesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vehicules: [],
            errorMessage:'',
            idClient: props.match.params.id
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
        this.getClientsVehicules();
    }



    getClientsVehicules(){
        


        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/clients/vehicules/list?id="+this.state.idClient, requestOptions)
          .then(response => response.json())
          .then(result => {

            console.log(result);
            this.setState({
                vehicules:result.vehicules
            })
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
                        <h1 class="h3 mb-0 text-gray-800">Vechiules list</h1>
                        <Link to={ '/clients/vehicules/add/'+this.state.idClient }   class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add</Link>
                    </div>



                    <div className="card">
                        <div className="card-body table-responsive">

                       
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Mark</th>
                                        <th>Model</th>
                                        <th>Registration </th>
                                        <th>Transmission</th>
                                        <th>Color</th>
                                        <th>Actions</th>
                                        
                                        
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.vehicules.map((v)=>{
                                            return (
                                                <tr>
                                                    
                                                    <td>
                                                        { v._id }
                                                    </td>
                                                    <td>
                                                        { v.mark }
                                                        
                                                    </td>
                                                    <td>
                                                        { v.model }
                                                        
                                                    </td>
                                                    <td>
                                                        { v.registration_plate }
                                                        
                                                    </td>
                                                    <td>
                                                        { v.transmission }
                                                        
                                                    </td>

                                                    <td> 
                                                        <div className="vehicule-color" style={ {backgroundColor: v.color} }></div>
                                                    </td>

                                                    <td>
                                                        <Link to={ '/clients/vehicules/historic/'+v._id } className="btn btn-success btn-sm">
                                                        <i class="fas fa-user-edit"></i>
                                                        </Link>
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