import { useState } from 'react'
import TelaFlashcards from './TelaFlashcards'

export default function TelaInicio() {
    const [sairTelaInicial, setSairTelaInicial] = useState(false);
    
    return(
        <>
        {sairTelaInicial 
            ? 
            <TelaFlashcards/> 
            :
            (
            <div className="tela-inicio">
                <img src="./assets/logo.png"></img>
                <div data-identifier="start-zap-recall" className="botao-iniciar" onClick={()=> setSairTelaInicial(true)}>
                    <p>Praticar React</p>
                    <img src="./assets/next.png"></img>
                </div>
            </div>
            )
        } 
        </>
    )
}