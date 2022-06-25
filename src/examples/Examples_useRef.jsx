import React, { useState, useEffect, useRef } from "react";


function Examples_useRef() {
    const [value, setValue] = useState("initial")
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (

        <div>
            <h1>колличество рендеров: {renderCount.current}</h1>
            <h2>прошлое состояние: {prevValue.current}</h2>
            <input ref={inputRef} type='text' onChange={(e) => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>фокус</button>

        </div>

    );
}

export default Examples_useRef;
