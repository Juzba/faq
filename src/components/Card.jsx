import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [open, setOpen] = useState(false);

    const { question, answer } = props.oneData;
    return (
        <div className="cardContainer">
            <div className="firstBox">
                <h2>{question}</h2>
                <button onClick={() => setOpen(!open)}>Odpověď</button>
            </div>
            <div className={`close ${open && "open"}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Card;
