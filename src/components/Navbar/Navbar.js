import CartWidget from '../cartwidget/cartwidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link className='Inicio' to='/'>Inicio</Link>
        <div className="Categories">
            <NavLink to='/category/camiseta' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>camiseta</NavLink>
            <NavLink to='/category/camiseta internacional' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>camisetas internacionales</NavLink>
            <NavLink to='/category/short' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>shorts</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar









