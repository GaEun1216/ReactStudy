// make react component 
import React from 'react';

function Hello({color,name,isSpecial}){
//function Hello(props){
    //return <div style={{color:props.color}}>안녕하세요 {props.name}</div>
    return <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
        </div>

}

Hello.defaultProps={
    name:'noname'
}

export default Hello;