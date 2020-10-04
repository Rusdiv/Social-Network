import React from 'react'
import classes from './index.module.css'


export default function Paginator(props) {
  return (
    <div>
        {props.pages.map( number => {
          return <span key={number} className={props.selectedPage === number ? classes.selected : classes.span} 
          onClick={(e) => props.onPageChange(number)}>{number}</span>
        })}
    </div>

  )
}
