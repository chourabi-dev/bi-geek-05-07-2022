import React from "react";
import Navbar from "../../comps/Navbar";
import SideMenu from "../../comps/Sidemenu";



export default class AddNewClientVehicule extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mark:'',
            model:"",
            registration_plate:"",
            color:"",
            transmission:"",
            idClient: props.match.params.id,


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




    addNewVehicule(){
        this.setState({isLoading:true,errorMessage:''})
        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token );

      
        var raw = JSON.stringify({"mark":this.state.mark,"model":this.state.model,"registration_plate":this.state.registration_plate,"color":this.state.color,"transmission":this.state.transmission,"clientID":this.state.idClient});




        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/add/vehicule", requestOptions)
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

                   
                    <h1 class="h3 mb-4 text-gray-800">Add new vehicule</h1>

                    <p className="text-muted">
                        in order to add a new vehicule, please fill out the form down below
                    </p>



                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={ (e)=>{
                                e.preventDefault();
                                this.addNewVehicule();
                            } } >

 


                                <div className="form-group mb-3">
                                    <label htmlFor="">Mark</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ mark:e.target.value }) } } />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Model</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ model:e.target.value }) } } />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Registration plate</label>
                                    <input type="text" className="form-control" onChange={ (e)=>{ this.setState({ registration_plate:e.target.value }) } } />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Color</label>
                                    <input type="color" className="form-control" onChange={ (e)=>{ this.setState({ color:e.target.value }) } } />
                                </div>


                                <div className="form-group mb-3">
                                    <label htmlFor="">Transmission</label>
                                    <select   className="form-control" onChange={ (e)=>{ this.setState({ transmission:e.target.value }) } } >
                                    <option className="Automatique">Automatique</option>
                                    <option className="Manuel">Manuel</option>
                                        

                                    </select>
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