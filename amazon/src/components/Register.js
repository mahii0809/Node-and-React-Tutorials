import React,{Component} from 'react';
import Dropdownprops from './Dropdownprops';
import request from 'async-request';
import axios from 'axios';

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
            email:"",
            countryList:[],
            hobbies:""
            
        }
        
    }
    async componentDidMount()
    {
        //any external API call at the time of loading
       // fetch("https://restcountries.eu/rest/v2/all").then(result =>{
         //   console.log(result);
           // return result.json();
        //}).catch(err=>{
          //  console.log(err)
        //}).then(finalResult=>{
          //  console.log(finalResult);
        //})
        //let contryList =await request("https://restcountries.eu/rest/v2/all");
        //console.log(contryList);
        let countryList =await axios("https://restcountries.eu/rest/v2/all");
        console.log(countryList);
        this.setState({countryList:countryList.data});
    }
    handleChanges=(e)=>{
        console.log(e.target.value);
        let currentState= this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
        console.log(this.state);
    }
    bindDataToDropDown=()=>
    {
        return this.state.countryList.map((item,index)=>{
        return <option value={item.alpha2Code}>{item.name}</option>

        })
    }
    render()
    {
        var Data=["Cricket","Carrom","Badminton"];
        return <div>
            <div>
                <label className="col-sm-2 col-form-label">Username:</label>
                <input type="text" placeholder="Username" name="username" onChange={this.handleChanges}/>
                       </div>
                
                       <div>
                <label className="col-sm-2 col-form-label">Firstname:</label>
                <input type="text" placeholder="firstname" name="firstname" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label className="col-sm-2 col-form-label">Last name:</label>
                <input type="text" placeholder="Lastname" name="Lastname" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label className="col-sm-2 col-form-label">Email:</label>
                <input type="email" placeholder="email" name="email" onChange={this.handleChanges}/>
                       </div>
                       <div>
                <label className="col-sm-2 col-form-label">Age:</label>
                <input type="text" placeholder="Age" name="Age" onChange={this.handleChanges}/>
                       </div>
                      
                       <div>
                <label className="col-sm-2 col-form-label">Gender:</label>
                <input type="radio"  value="Male" name="gender" onChange={this.handleChanges}/>Male
                <input type="radio"  value="Female" name="gender" onChange={this.handleChanges}/>Female
                       </div>
                       <div>
                           <label className="col-sm-2 col-form-label">Hobbies:</label>
                        <Dropdownprops list={Data}/>
                    </div>
                    <div>
                           <label className="col-sm-2 col-form-label">Country:</label>
                      
                      <select className="form-control"id="countryList" name="countryList" onChange={this.handleChanges}>
                          {this.bindDataToDropDown()}
                    </select>
                    </div>
                       <div>
                
                <input type="checkbox" placeholder="Age" id="check"value="agree"name="agree" onChange={this.handleChanges}/> I Agree to the Terms and condition
                       </div>
                       
                       <div>
      <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    
                    <div>
            <p>{this.state.username}</p>
            <p>{this.state.firstname}</p>
            <p>{this.state.Lastname}</p>
            <p>{this.state.Age}</p>
            <p>{this.state.email}</p>
            <p>{this.state.gender}</p>
            <p>{this.state.hobbies}</p>
            <p>{this.state.country}</p>
        </div>
    </div>
        
    }
}
