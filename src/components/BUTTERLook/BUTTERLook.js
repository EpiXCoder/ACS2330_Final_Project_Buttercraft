// import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './BUTTERLook.css'

function BUTTERLook(props) {
    const { image, id } = props
    return (
    <div className="BUTTERLook">
        <Link to={`/details/${id}`}>
        <img 
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            width="300" 
            height="375" 
            alt="Hello" />
        </Link>
    </div>
    )
}

export default BUTTERLook