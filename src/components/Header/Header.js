import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <header className='container'>
            <div className="App-header">
                <img src={logo} className="App-header-logo" alt="logo" />
                <div className="App-header-texte">
                    <nav>
                    <NavLink to="/" >Accueil</NavLink>
                    <NavLink to="/propos" >A Propos</NavLink>
                    </nav>
                </div>
            </div>
      </header>
    )
}

export default Header;