import logo from './logo.svg';
import './App.css';
import ContactElement from './components/contact';
import Employee from './components/Employee';
import LikeButton from './components/LikeButton';
import ToggleSwitch from './components/ToggleSwitch';
import Parent from './components/Parent';
import Forms from './components/Forms';
/*
function App() { 



  const employees = [
    { name:'chourabi taher1', email:'tchourabi@gmail.com' },
    { name:'chourabi taher2', email:'tchourabi@gmail.com' },
    { name:'chourabi taher3', email:'tchourabi@gmail.com' },
    { name:'chourabi taher4', email:'tchourabi@gmail.com' },
    
  ];
   
  return (
    <div className="App">
        
      {
                <ContactElement codeContact="181915" year={ 2009 } title="test" email="test@test.com" /> 
                  <ContactElement codeContact="181920"  year={ 2015 } title="test 2" email="test-2@test.com" /> 
                  <ContactElement year={ 2018 } title="test 3" email="test-3@test.com" /> 

         
      }



      {
        employees.map((e)=>{
          return <Employee key={e.name} name={e.name} email={ e.email } />
        })
      }

      




    </div>

  );
}*/





function App(){
  return(
    <div>
      <Forms />
      
    </div>
  );
}

export default App;
