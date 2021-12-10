import { useState } from 'react'
import Flashcard from './Flashcard'

export default function TelaFlashcards() {
    const[index, setIndex] = useState(0)
    return(
        <div className="tela-flashcards">
            <img src="./assets/logo-mini.png"></img>
            <div className="posicao-card">   
                <Flashcard index={index} setIndex={setIndex}/>
            </div>    
        </div>
    )
}

