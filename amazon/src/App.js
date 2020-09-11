import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
import { BookComponent } from './components/book';

//This is pure component or stateless component
//any component we create are part of react
const App =()=>{
    const companyName='Pega Systems';
    return <div>
        <Header title={companyName} /> 
        <center>
            <h1>Product </h1>
       <BookComponent/></center> 
        </div>;
};
export default App;
