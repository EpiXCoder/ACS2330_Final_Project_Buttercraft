// import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './BUTTERLook.css'

function BUTTERLook(props) {
    const { image, id, aria } = props
    return (
    <div className="BUTTERLook">
        <Link to={`/details/${id}`} aria-label={`View details of ${aria}`}>
        <img 
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            width="300" 
            height="375" 
            alt="cake" />
        </Link>
    </div>
    )
}

export default BUTTERLook