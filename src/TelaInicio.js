import { useState } from 'react'
import TelaFlashcards from './TelaFlashcards'

export default function TelaInicio() {
    const [sairTelaInicial, setSairTelaInicial] = useState(false);
    
    return(
        <div className="tela-inicio">
            {sairTelaInicial 
            ? 
            <TelaFlashcards/> 
            :
            (
            <>
            <img src="./assets/logo.png"></img>
            <div className="botao-iniciar" onClick={()=> setSairTelaInicial(true)}>
                <p>Praticar React</p>
                <img src="./assets/next.png"></img>
            </div>
            </>
            )
            } 
        </div>
    )
}