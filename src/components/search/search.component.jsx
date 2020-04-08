import React, {Component} from "react";
import './search.styles.css'

export const Search = (props) => {
  return (
    <div className='search-container'>
      <input placeholder={props.placeholder} onChange={props.onKeyUp}/>
    </div>
  )
}
