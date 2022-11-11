import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </div>
  )
}

export default Navbar