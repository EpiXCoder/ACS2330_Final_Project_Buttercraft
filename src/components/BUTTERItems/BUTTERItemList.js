import React from 'react'
import BUTTERItem from './BUTTERItem'
import './BUTTERItemList.css'

function BUTTERItemList(props) {
	const shopItem = props.items.map((item) => {
    return <BUTTERItem key={item.key} items={item} />
  })
	return <div className="BUTTERItemList">{shopItem}</div>
}

export default BUTTERItemList