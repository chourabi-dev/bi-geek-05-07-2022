import React from "react";
import Navbar from "../comps/Navbar";
import SideMenu from "../comps/Sidemenu";

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
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



    render(){
        return(
            <div>
                
    <div id="wrapper">

        
        <SideMenu />
        
        <div id="content-wrapper" class="d-flex flex-column">

           
            <div id="content">

                 
                <Navbar />
               

               
                <div class="container-fluid">

                   
                    <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

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