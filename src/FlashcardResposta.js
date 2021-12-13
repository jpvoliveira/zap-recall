import { useState } from 'react'
import Flashcard from './Flashcard'
import TelaFracasso from './TelaFracasso';
import TelaSucesso from './TelaSucesso'

export default function FlashcardResposta(props){
    const [addTurn, setAddTurn] = useState(false);
    const [corBorda, setCorBorda] = useState("")
    const [novoCard1, setNovoCard1] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [erro, setErro] = useState(false)
    let novoIndex = props.index + 1
    let valorErro = [props.erro]

    if(props.array !== undefined){
        valorErro = [...props.array,props.erro]
    }
    
    console.log(valorErro)
    function proximoCard(clique){
        setNovoCard1(clique)
    }

    function eTrue (array) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element === true) {
                return true
            }
        }
    }

    function clicado(clique, borda){
        if(borda === "borda-vermelha" || borda === "borda-preta"){
            setErro(true)
        }
        else{
            setErro(false)
        }

        if(novoIndex > 7) {
            setSucesso(true)
            valorErro.push(erro)
        }
        if(novoIndex.length === 8) {
            setSucesso(true)
            console.log(erro)
        }
        
        setAddTurn(clique)
        setCorBorda(borda)
        valorErro.push(erro)
    }
    return(
        <>
        {novoCard1
        ?
        <>
        {sucesso ? 
                eTrue(valorErro) ?
                <TelaFracasso/>
                :
                <TelaSucesso/>
            :
        <Flashcard index={novoIndex} erro={erro} array={valorErro}/>
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