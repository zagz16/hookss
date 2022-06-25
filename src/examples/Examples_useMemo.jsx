import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
    let i = 0
    while (i < 100000000) i++
    return num * 2
}

function Examples_useMemo() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Styles changed');
    }, [styles])

    return (
        <>
            <h1 style={styles}>Вычисляемое значение:{computed}</h1>
            <button className="btn green" onClick={() => setNumber(prev => prev + 1)}>добавить</button>
            <button className="btn btn-danger blue" onClick={() => setNumber(prev => prev - 1)}>убавить</button>
            <button className="btn red" onClick={() => setColored(prev => !prev)}>изменить</button>
        </>
    );
}

export default Examples_useMemo;
