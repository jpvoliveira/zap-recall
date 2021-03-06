import { useState } from 'react'
import FlashcardResposta from './FlashcardResposta'

export default function Flashcard({index, erro}){
    const itens = [
        {questao:1, pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
        {questao:2, pergunta:"O React é __", resposta:"Uma biblioteca JavaScript para construção de interfaces"},
        {questao:3, pergunta:"Componentes devem iniciar com __ ", resposta:"Letra maiúscula"},
        {questao:4, pergunta:"Podemos colocar __ dentro do JSX", resposta:"Expressões"},
        {questao:5, pergunta:"O ReactDOM nos ajuda __", resposta:"Interagindo com a DOM para colocar componentes React na mesma"},
        {questao:6, pergunta:"Usamos o npm para __", resposta:"Gerenciar os pacotes necessários e suas dependências"},
        {questao:7, pergunta:"Usamos props para __", resposta:"Passar diferentes informações para componentes"},
        {questao:8, pergunta:"Usamos estado (state) para __", resposta:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    const [verResposta, setVerResposta] = useState(false);

    return(
        <>
        {verResposta 
            ? 
            <FlashcardResposta item={itens[index]} index={index} erro={erro}/> 
            :
            (
            <div className="flashcard" data-identifier="flashcard">  
                <div className="contador" data-identifier="counter">{itens[index].questao}/8</div>
                <div className="pergunta">
                    <p>{itens[index].pergunta}</p>
                </div>
                <div className="proxima" data-identifier="arrow">
                    <img onClick={()=> setVerResposta(true)} src="./assets/turn.png"></img>
                </div>
            </div>
            )}
         </>
    )
}