import React, { useState, useEffect } from "react";


function Examples_useeffect() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type');
        }
    }, [type])


    const mouseMoveHandler = e => {
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div className="App">
            <h1>Ресурс:{type}</h1>

            <button onClick={() => setType("users")}>Пользователи</button>
            <button onClick={() => setType("todos")}>Todos</button>
            <button onClick={() => setType("posts")}>Посты</button>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </div>
    );
}

export default Examples_useeffect;