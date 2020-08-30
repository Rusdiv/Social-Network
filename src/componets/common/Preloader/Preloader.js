import React from 'react'
import loader from '../../../accets/loader.svg'

export default function Preloader(props) {
  return (
    <div>
      <img src={loader} alt='preloader'/>
    </div>
  )
}
