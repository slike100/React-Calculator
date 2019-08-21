import React from 'react';
import Button from '../util.js'

export default function Buttons(props){
  return (Button.map(function(element,index){
    return (
      <button key={index} data-value={element.value} name={element.type} onClick={props.getNum} id={element.id}>{element.value}</button>
    )
  }))
}
