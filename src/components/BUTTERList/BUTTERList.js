import React from 'react';
import BUTTERLook from '../BUTTERLook/BUTTERLook';
import './BUTTERList.css';
import data from '../../butter-data'
// import { useState } from 'react'
// import RandomSpace from '../RandomLook/RandomLook'


function BUTTERList() {
  const looks = data.map((obj) => {
    const { id, image, aria} = obj
  // const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <BUTTERLook
        id={id}
        key={id}
        image={image}
        aria={aria}
      />
    )
  })
  return (
    <div>
      <div className="BUTTERList">
			  {looks}
      </div>
    </div>
  )
}
  
  export default BUTTERList