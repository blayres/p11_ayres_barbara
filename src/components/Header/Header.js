import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <header className='container'>
            <div className="App-header">
                <img src={logo} className="App-header-logo" alt="logo" />
                <div className="App-header-texte">
                    <Link to="/" >Accueil</Link>
                    <Link to="/propos" >A Propos</Link>
                </div>
            </div>
      </header>
    )
}

export default Header;