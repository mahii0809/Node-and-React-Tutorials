import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
//This is pure component or stateless component
//any component we create are part of react
const App =()=>{
    const companyName='Pega Systems';
    return <div>
        <Header title={companyName} /> 
        <h1><center><i>Registration Form</i></center></h1>
       <center><RegisterComponent /></center> 
        </div>;
};
export default App;
