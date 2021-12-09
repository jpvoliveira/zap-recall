import { useState } from 'react'
import FlashcardResposta from './FlashcardResposta'

const itens = [
    {pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
    {pergunta:"O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
    {pergunta:"Componentes devem iniciar com __ ", resposta:"Letra maiúscula"},
    {pergunta:"Podemos colocar __ dentro do JSX", resposta:"Expressões"},
    {pergunta:"O ReactDOM nos ajuda __", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
    {pergunta:"Usamos o npm para __", resposta:"Gerenciar os pacotes necessários e suas dependências"},
    {pergunta:"Usamos props para __", resposta:"Passar diferentes informações para componentes"},
    {pergunta:"Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

export default function Flashcard(){
    const [verResposta, setVerResposta] = useState(false);
    return(
        <div className="flashcard">  
            {verResposta 
            ? 
            <FlashcardResposta/> 
            :
            (
            <>
                <div className="contador">1/8</div>
                <div className="pergunta">
                    <p>{itens[0].pergunta}</p>
                </div>
                <div className="proxima">
                    <img onClick={()=> setVerResposta(true)} src="./assets/turn.png"></img>
                </div>
            </>
            )}
        </div>
    )
}