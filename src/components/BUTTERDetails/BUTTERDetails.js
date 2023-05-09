import React from 'react'
import { useParams } from 'react-router'
import data from '../../butter-data.js'
import './BUTTERDetails.css'
// import BUTTERItemList from '../BUTTERItems/BUTTERItemList'
import OrderForm from '../BUTTEROrderForm/BUTTEROrderForm.js'



function BUTTERDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { image, name, aria } = data[id]

  return (
    <div>
      <h1>{name}</h1>
      <div className="BUTTERDetails" role="main">
        <div className="BUTTERDetails-image">
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={aria}/>
         </div>
        <div className="BUTTERDetails-info">
          <OrderForm/>
        </div>
      </div>
</div>
  )
}

export default BUTTERDetails