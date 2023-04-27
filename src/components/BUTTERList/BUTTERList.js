import React from 'react';
import BUTTERLook from '../BUTTERLook/BUTTERLook';
import './BUTTERList.css';
import data from '../../butter-data'
// import { useState } from 'react'
// import RandomSpace from '../RandomLook/RandomLook'


function BUTTERList() {
  const looks = data.map((obj) => {
    const { id, image} = obj
  // const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <BUTTERLook
        id={id}
        key={id}
        image={image}
      />
    )
  })
  return (
    <div>
      <div className="BUTTERList">
			  {looks}
      </div>
      <div className="Footer">
          <hr className="Line"/>
        <small>Butter Craft copyright 2023</small>
        <p></p>
      </div>
    </div>
  )
}
  
  export default BUTTERList