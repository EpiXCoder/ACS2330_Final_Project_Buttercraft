import React from 'react'
import './BUTTERItem.css'
import { Link } from 'react-router-dom'

function BUTTERItem(props) {
	
	return <div className="BUTTERItem">
	 <Link to={props.items.link}>
        <img 
            src={props.items.image} 
            width="100" 
            height="150" 
            alt="item" />
        </Link>
	</div>
}

export default BUTTERItem