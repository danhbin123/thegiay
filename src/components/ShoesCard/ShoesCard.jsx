import React from 'react'
import { NavLink } from 'react-router-dom'

const ShoesCard = (props) => {
  const {prod} = props
  return (
    <div className='card'>
      <img src={prod.image}/>
      <div className='card-body'>
        <h3>{prod.price}</h3>
        <NavLink className='btn btn-success'>
          Hello
        </NavLink>
      </div>
    </div>
  )
}

export default ShoesCard