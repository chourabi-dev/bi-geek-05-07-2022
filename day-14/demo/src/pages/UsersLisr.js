import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,

      error: false,
      messageError: ''
    }
  }


  getDataFromServer() {
    // init 
    this.setState({
      isLoading: true,
      error: false,
      messageError: ''
    })
    // GET api 

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then(response => response.json())


      .then(result => {

        console.log(result);



        this.setState({
          users: result,
          isLoading: false
        })
      }).catch(error => {
        this.setState({
          isLoading: false,
          error: true,
          messageError: 'Something went wrong , please try again later.'
        })
      });
  }

  componentDidMount() {
    this.getDataFromServer();
  }


  componentDidCatch() {

  }


  componentWillUnmount() {

  }


  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        <Navbar />



        {
          this.state.isLoading === true ?
            <div className="text-center mt-5">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>

            </div>

            :


            <div>

              {
                this.state.error === false ?

                  <ul>
                    {
                      this.state.users.map((u) => {
                        return (<li>
                          <Link to={'/user/' + u.id}  >{u.name}</Link>
                        </li>);
                      })
                    }
                  </ul>

                  :


                  <div className="mt-5">
                    <div className="alert alert-danger">{this.state.messageError}. 
                    <span className="text-primary" onClick={() => { this.getDataFromServer(); }} >refresh</span></div>
                  </div>
              }
            </div>

        }

      </div>
    );
  }


}