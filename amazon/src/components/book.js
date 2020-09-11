import React,{Component} from 'react';
import request from 'async-request';
import axios from 'axios';
export class BookComponent extends Component{
    constructor()
    {
        super();
        this.state={
            book:[
            
            
            ]
        }
        
    }
    handleChanges=(e)=>{
        console.log(e.target.value);
        let currentState= this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
        console.log(this.state);
    }
async componentDidMount()
    {
        let bookList =await axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
        console.log(bookList);
        this.setState({book: bookList.data});
    }

    bindData=()=>
    {
        return this.state.book.map((item,index)=>{
        return <img src={item.Url}alt={index}></img>
        })
    }
    render()
    {
        
        return <div>
            {this.bindData()}
    </div>
        
    }
}