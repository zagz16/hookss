import React, { useState } from "react";

function randomCalculate() {
    console.log("checkin")
    return Math.trunc(Math.random() * 20)
}

function Examples_usestate() {
    const [counter, setCounter] = useState(() => randomCalculate())

    const [state, setState] = useState({
        title: "счетчик",
        date: Date.now()
    })

    function increment() {
        console.log("minus")
        setCounter(prev => prev + 1)
    }
    function decrement() {
        console.log("plus")
        setCounter(prev => prev - 1)
    }

    function updateTitle() {
        setState((prev) => {
            return {
                ...prev,
                title: 'счета'
            }
        })
    }
    /*   useEffect(() => {
        console.log("check useeffect")
      }, [counter]) */

    return (
        <div className="App">
            <h3>{counter}</h3>
            <button className="btn btn-success" onClick={decrement}> Минусуем</button>
            <button className="btn btn-danger" onClick={increment}>Плюсуем</button>
            <button className="btn btn-default" onClick={updateTitle}>Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default Examples_usestate;
