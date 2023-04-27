import React from 'react'
import { useParams } from 'react-router'
import data from '../../butter-data.js'
import './BUTTERDetails.css'
import BUTTERItemList from '../BUTTERItems/BUTTERItemList'



function BUTTERDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { primary, items } = data[id]

  return (
    <div>
      <div className="BUTTERDetails">
        <div className="BUTTERDetails-image">
          <img src={primary} alt='look'/>
         </div>
        <div className="BUTTERDetails-info">
          <h2>Shop this look</h2>
          <BUTTERItemList items={items}/>
        </div>
      </div>
</div>
  )
}

export default BUTTERDetails