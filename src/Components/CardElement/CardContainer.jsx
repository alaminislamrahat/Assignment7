import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "./SingleCard";


const CardContainer = ({handleSelect}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCards(data)
        })
    },[])
    return (
        <div className="grid md:grid-cols-3 gap-10 pb-60">
            {
                cards.map(card => <SingleCard  handleSelect={handleSelect} key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

export default CardContainer;