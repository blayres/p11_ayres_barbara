import './Card.css';
import { Navigate, useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Card(props) {


    return (
        <div className='Card'>
           
        <Link to={`/houses/${props.logement.id}`} key={props.logement.id} className="App-main-diaporama-photo"> 
        <div className='gradient'>
            <img src={props.logement.cover} className="cover" alt="cover" />
        </div>
              <div className="App-main-diaporama-title"><p>{props.logement.title}</p></div>
        </Link>
        </div>
    )
}

export default Card;