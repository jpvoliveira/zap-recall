import Flashcard from './Flashcard'

export default function TelaFlashcards() {
    const index = 0
    const erro = 0
    
    return(
        <div className="tela-flashcards">
            <img src="./assets/logo-mini.png"></img>
            <div className="posicao-card">   
                <Flashcard index={index} erro={erro}/>
            </div>    
        </div>
    )
}

