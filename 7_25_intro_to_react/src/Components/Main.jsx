import { useState } from "react";

function Main() {
    // sets counter to 0
    // creates a function to update counter (setCounter())
    const [counter, setCounter] = useState(0);

    function handleUp() {
        setCounter(counter + 1);
    }

    function handleDown() {
        setCounter(counter - 1);
    }

    return (
        <>
            <main>
                <p>Main</p> <br/>
                <p>Count = {counter}</p>
                <button onClick={handleUp}>upvote</button>
                <button onClick={handleDown}>down vote</button>
            </main>
        </>
    );
}

export default Main;