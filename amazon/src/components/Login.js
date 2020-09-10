import React,{Component} from 'react';

export class LoginComponent extends Component{
    constructor()
    {
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        let currentState= this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }
    render()
    {
        return <div>
            <h2>Login</h2>
            
            <input type="text" placeholder="password" name="username" onChange={this.handleChange}/>

            <input type="text" placeholder="Username" name="password" onChange={this.handleChange}/>
            <h2><i>{this.state.username}</i></h2>
            <h2><i>{this.state.password}</i></h2>
        </div>
        
    }
}
