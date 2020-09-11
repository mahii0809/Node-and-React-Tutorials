import React from 'react';
const DropdownList =()=>{
    var list=["mahi","pk","shivu"];
    return <select>
    {list.map((item,index)=>{
        return <option value={index} name={item}>{item}</option>
    })}
    </select>
};
export default DropdownList;