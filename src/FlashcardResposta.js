import { useState } from 'react'
import Flashcard from './Flashcard'
import TelaFracasso from './TelaFracasso';
import TelaSucesso from './TelaSucesso'

export default function FlashcardResposta(props){
    const [erro, setErro] = useState(props.erro)
    console.log("fora = "+erro)
    const [addTurn, setAddTurn] = useState(false);
    const [corBorda, setCorBorda] = useState("")
    const [novoCard1, setNovoCard1] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    let novoIndex = props.index + 1
    
    function proximoCard(clique){
        setNovoCard1(clique)
    }

    function resultado(borda){
        if(borda === "borda-vermelha" || borda === "borda-preta" ){
            setErro(erro+1)
            console.log("dentro = "+erro) 
        }
    }

    function clicado(clique, borda){
        resultado(borda)
        if(novoIndex > 7) {
            setSucesso(true)
        }
        
        setAddTurn(clique)
        setCorBorda(borda)
    }
    return(
        <>
        {novoCard1
        ?
        <>
        {sucesso ? 
                erro > 0 ?
                <TelaFracasso erro={erro}/>
                :
                <TelaSucesso/>
            :
        <Flashcard index={novoIndex} erro={erro}/>
        }
        </>
        :
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
            <div className="proxima">
                <img onClick={()=>proximoCard(true)} src="./assets/turn.png"></img>
            </div>
            :
            
            <Nota clicado={clicado}/>
            }
        </div>
        }
        </>
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