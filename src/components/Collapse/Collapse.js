import './Collapse.css'
import IconArrow from '../Icons/Arrow';
import IconArrowUp from '../Icons/ArrowUp';
import { useState } from 'react';

function Collapse(props) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
    setOpen(!open);
  };

    return (
        <div className="App-buttons">
            <button className="closed-button" onClick={toggle}><p>{props.title} </p>
            <div className='icon' >
            <IconArrow />
            </div>
            </button>
                {open && (
                  <div className="button-texte-down">
                        {!props.isArray ? (
                        <p>{props.text} </p>
                    ) : (
                        <ul>
                        {props.text.map((word, index) => (         
                            <li>{word}</li>
                        ))}
                        </ul>
                    )}
                  </div>
                )}
        </div>
    )
}

export default Collapse;