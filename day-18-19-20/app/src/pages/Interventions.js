import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../comps/Navbar";
import SideMenu from "../comps/Sidemenu";
 


export default class VehiculeDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            interventions: [],
            idVehicule : props.match.params.id,
            errorMessage:'',



            date:'',
            time:'',
            descreption:'',
            price:'',




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



    getVehiculeDataById(){
        


        const token = localStorage.getItem('token');

            // check server !!

                var myHeaders = new Headers();
                myHeaders.append("Authorization", token);

                var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("http://localhost:8080/api/clients/vehicule/intervention/find-by-id?id="+this.state.idVehicule, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);

                    this.setState({
                        interventions : result.interventions
                    })
                })
                .catch(error => {
                  console.log(error);
                });

    }



    componentDidMount(){

        this.checkAuth();


        this.getVehiculeDataById();
        
    }



    addInetrvention(){
        this.setState({isLoading:true,errorMessage:''})
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);


        var raw = JSON.stringify({"date":this.state.date,"time":this.state.time,"price":this.state.price,"descreption":this.state.descreption,"idVehicule":this.state.idVehicule});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/vehicule/add/intervention", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            if (result.success === false) {
                this.setState({ errorMessage: result.message })
            } else {
              
                this.setState({ successMessage: result.message })

                this.getVehiculeDataById();

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

                   
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Historic</h1>
                         
                    </div>



                    <div className="card">
                        <div className="card-body table-responsive">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>Historic</h3>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sapiente debitis illo vitae quos aspernatur consectetur facere nostrum sint. Eum ratione, magnam numquam praesentium labore reiciendis dolores harum nobis officia.
                                    </p>


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Price</th>
                                                <th>Descreption</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.interventions.map((i)=>{
                                                    return(
                                                        <tr>
                                                            <td>{i.date}</td>
                                                            <td>{i.time}</td>
                                                            <td>{i.price}$</td>
                                                            <td>{i.descreption}</td>
                                                            
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>


                                </div>
                                <div className="col-sm-6">
                                    <h3>Add new intervention</h3>

                                    <form onSubmit={ (e)=>{
                                        e.preventDefault();
                                        this.addInetrvention();
                                    } } >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Date</label>
                                                    <input type="date" className="form-control" onChange={ (e)=>{ this.setState({ date: e.target.value }) } } />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Date</label>
                                                    <input type="time" className="form-control" onChange={ (e)=>{ this.setState({ time: e.target.value }) } } />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="">Price</label>
                                            <input type="number" className="form-control" onChange={ (e)=>{ this.setState({ price: e.target.value }) } } />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="">Descreption</label>
                                            <textarea className="form-control" onChange={ (e)=>{ this.setState({ descreption: e.target.value }) } } ></textarea>
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