import Typer from "../../typewriter/Typewriter";
import Hand from "./Hand";



const Greetings = () => {
    return (
        <div className="greetings-container">
            <div className="greetings-text">
                <h1>
                    <span>Hi!</span>
                    <span>I'm Máximo Lanza</span>
                    <Typer text='Software developer' />
                </h1>
            </div>
            <div className="greetings-hand">
                <Hand />
            </div>

        </div>
    );
}

export default Greetings;