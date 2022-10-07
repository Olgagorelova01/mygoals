import { useState } from "react";
import { data} from "./data";
import './App.css';

function App() {
    const [goal, setGoal] = useState(0);
    const {id, name, description, source, image} = data[goal];
    const [showMore, setShowMore] = useState(false);

  
    const previousGoal = () => {
        setGoal((goal => {
            goal --;
            if (goal < 0) {
                return data.length - 1;
            }
            return goal;
        }))
    }

    const nextGoal = () => {
        setGoal ((goal => {
            goal ++;
            if (goal > data.length - 1) {
                goal = 0;
            }
            return goal;
        }))
    }

    return(
        <div>
            <div className="container">
                <h1>{name}</h1>
            </div>
            <div className="container">
                <img src={image} width="400px" alt="goals"/>
            </div>
            <div className="container">
                <p>{showMore ? description : description.substring(0, 130) + " ..."}
                <button className="showMore" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
                </p>
            </div>
            <div className="container">
                <button>{source}</button>
            </div>
            <div className="btn container">
                <button onClick={previousGoal}>Previous</button>
                <button onClick={nextGoal}>Next</button>
            </div>
        </div>
    )

}

export default App;
