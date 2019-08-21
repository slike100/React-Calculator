import React from 'react';

export default function Display(props){
  console.log(props);
  return (
    <h1 id="display">{props.displayNum}</h1>
  )
}
