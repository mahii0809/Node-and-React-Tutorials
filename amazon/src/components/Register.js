import React,{Component} from 'react';

export class RegisterComponent extends Component{
    constructor()
    {
        super();
        this.state={
            username:"",
            firstname:"",
            Lastname:"",
            Age:"",
            gender:"",
            email:""
            
        }
        
    }
    handleChanges=(e)=>{
        console.log(e.target.value);
        let currentState= this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }
    render()
    {
        return <div>
            <div>
                <label class="col-sm-2 col-form-label">Username:</label>
                <input type="text" placeholder="Username" name="username" onChange={this.handleChanges}/>
                       </div>
                
                       <div>
                <label class="col-sm-2 col-form-label">Firstname:</label>
                <input type="text" placeholder="firstname" name="firstname" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label class="col-sm-2 col-form-label">Last name:</label>
                <input type="text" placeholder="Lastname" name="Lastname" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label class="col-sm-2 col-form-label">Email:</label>
                <input type="email" placeholder="email" name="email" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label class="col-sm-2 col-form-label">Age:</label>
                <input type="text" placeholder="Age" name="Age" onChange={this.handleChanges}/>
                       </div>
                      
                       <div>
                <label class="col-sm-2 col-form-label">Gender:</label>
                <input type="radio"  value="Male" name="gender" onChange={this.handleChanges}/>Male
                <input type="radio"  value="Female" name="gender" onChange={this.handleChanges}/>Female
                       </div>
                      
                       <div>
                
                <input type="checkbox" placeholder="Age" name="agree" onChange={this.handleChanges}/> I Agree to the Terms and condition
                       </div>
                       <div>
      <button type="submit" class="btn btn-primary">Register</button>
                    </div>

                    <div>
            <p>{this.state.username}</p>
            <p>{this.state.firstname}</p>
            <p>{this.state.Lastname}</p>
            <p>{this.state.Age}</p>
            <p>{this.state.email}</p>
            <p>{this.state.gender}</p>
        </div>
    </div>
        
    }
}