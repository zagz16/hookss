import React from 'react'
import { useAlert } from './alert/AlertContext'

function Main() {
    const { show } = useAlert()

    return (
        <>
            <h1>привет в мире context</h1>
            <button onClick={() => show('этот текст из main')} className='btn btn-success'>показать alert</button>
        </>
    )
}

export default Main