import React from 'react';
const Button=(props)=> {
    return <button onClick={
    e=>{
       props.clickButton()
    }
}>{props.name}</button>
}
export default Button;