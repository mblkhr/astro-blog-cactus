import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypeWrtier = ({ words, typeSpeed, deleteSpeed, loop = 0 }) => {
    const [text] = useTypewriter({
        words: words ? words : ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
        typeSpeed: typeSpeed,
        deleteSpeed: deleteSpeed ? deleteSpeed : (typeSpeed * 2)


    })

    return (
        <div onClick={() => { loop = 0 }}>
            <span>{text}</span>
            <Cursor
                cursorColor='black'
                cursorStyle={"\u25AE"}
            />
        </div>
    )
}

export default TypeWrtier;