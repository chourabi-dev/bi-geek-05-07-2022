import React from "react";

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'Loading...'
        }
    }

    
    checkAuth(){
        
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
                    console.log(result);

                    this.setState({
                        username: result.info.firstname+' '+result.info.lastname
                    })
                })
                .catch(error => {
                    this.props.history.push('/auth');
                });
       
    }

    componentDidMount(){
        this.checkAuth();
    }


    render(){
        return(
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                   
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                         
                    </form>

                   
                    <ul class="navbar-nav ml-auto">

                        
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            
                            
                             
                        </li>

                         

                        <div class="topbar-divider d-none d-sm-block"></div>

                    
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{ this.state.username }</span>
                                 
                            </a>
                           
                            
                        </li>

                    </ul>

                </nav>
        );
    }
}
