import React, { Component } from 'react';
import ProductList from './components/ProductList';
import AmazonHeader from './components/AmazonHeader';

//This is pure component or stateless component
//any component we create are part of react
export class App extends Component {
    constructor(){
        super();
        this.state={
            companyName:'Amazon',
            cartCount:0
        }
    }
    handleclick=(data)=>{
        console.log(data);
       // props.handleclick(data);
       this.setState({cartCount:this.state.cartCount+1})
    }
    render(){
    return <div>
        <AmazonHeader title={this.state.companyName} 
        cartCount={this.state.cartCount} /> 
        {/*ProductList*/}
        <ProductList updateCart={this.handleclick}/>
        </div>;
    }
};
export default App;
