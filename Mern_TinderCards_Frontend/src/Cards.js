import React,{useState,useEffect} from 'react'
import  "./Cards.css";
import TinderCard from "react-tinder-card";
import axios  from "./axios";

function Cards() {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
    async function fetchData(){
        const req=await axios.get('/tinder/cards');

        setPeople(req.data);
    }
    fetchData();
    },[]);

    const Swiped= (direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
        /*setLastDirection(direction);*/
    };
    const outOfFrame = (name)=>{
        console.log(name+"left the screen");
    };
    
    return (
        <div className="cards">
            <div className="Cards__cardContainer">

            {people.map((person)=>(
                <TinderCard className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>Swiped(dir,person.name)}
                onCardLeftScrean={()=>outOfFrame(person.name)}>
                    
                <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card">
                    <h2 className="name">{person.name}</h2>
                </div>
                
                </TinderCard>
            ))}

            </div>
        </div>
    );
}

export default Cards;
