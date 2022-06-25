import React, { useState, useCallback } from "react";
import ItemsList from "./UseCalback/itemsList";

function Examples_useCalback() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromApi = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `элемент ${i + 1}`)
    }, [count])

    return (
        <>
            <h1 style={styles}>Вычисляемое значение:</h1>
            <button className="btn btn-danger blue" onClick={() => setCount(prev => prev + 1)}>ДОБАВИТЬ</button>
            <button className="btn red" onClick={() => setColored(prev => !prev)}>изменить</button>

            <ItemsList getItems={generateItemsFromApi} />
        </>
    );
}

export default Examples_useCalback;
