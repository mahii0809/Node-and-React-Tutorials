import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Counter from './counter';
import TextBox from './Textbox';

class App extends Component{
  constructor(){
    super();
    this.state={
      count:100
    }

  }
  handleclickinc=()=>{
    console.log("clicked");
    this.setState({count:this.state.count+1})
  }
  handleclickdec=()=>{
    console.log("clicked");
    this.setState({count:this.state.count-1})
  }
  render(){
  return(
    <div className="App">
      <TextBox/>
      <Counter count={this.state.count}/>
    <Button name="increment"clickButton={this.handleclickinc}/>
    <Button name="decrement" clickButton={this.handleclickdec}/>
    </div>
  );
}
}
export default App;
