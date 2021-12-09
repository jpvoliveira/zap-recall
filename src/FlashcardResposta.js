import { useState } from 'react'
import FlashcardBorda from './FlashcardBorda'

export default function FlashcardResposta(props){
    const [addTurn, setAddTurn] = useState(false);
    const [corBorda, setCorBorda] = useState("")

    function clicado(clique, borda){
        setAddTurn(clique)
        setCorBorda(borda)

        // if(borda !== "borda-verde"){
        //     let erro = erro + 1
        // }
    }

    return(
        <div className={"flashcard "+corBorda}>
            <div className="cabecalho-card">
                <div className="pergunta-pequena">{props.item.pergunta}</div> 
                <div className="contador">{props.item.questao}/8</div>
            </div>
            <div className="resposta">
                <p>{props.item.resposta}</p>
            </div>
            {addTurn
            ? 
            <FlashcardBorda/> 
            :
            (
            <Nota clicado={clicado}/>
            )}
        </div>
    )
}

function Nota({clicado}){
    return(
        <div className="nota">
            <div className="tipo-nota borda-preta" onClick={()=>clicado(true, "borda-preta")}>Aprendi agora</div>
            <div className="tipo-nota borda-vermelha" onClick={()=>clicado(true, "borda-vermelha")}>Não lembrei</div>
            <div className="tipo-nota borda-verde" onClick={()=>clicado(true, "borda-verde")}>Lembrei com esforço</div>
            <div className="tipo-nota borda-amarela" onClick={()=>clicado(true, "borda-amarela")}>Zap!</div>
        </div>
    )
}