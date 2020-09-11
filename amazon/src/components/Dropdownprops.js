import React from 'react';
const Dropdownprops =(props)=>{
    
    return <select>
    {props.list.map((item,index)=>{
        return <option value={index}>{item}</option>
    })}
    </select>
};
export default Dropdownprops;