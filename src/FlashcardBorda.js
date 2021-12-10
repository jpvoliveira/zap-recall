import { useState } from "react/cjs/react.development"
import Flashcard from "./Flashcard"
import TelaSucesso from "./TelaSucesso"

export default function FlashcardBorda(props){
    // const [cartaInicio,setCartaInicio] = useState(false)
    const [flashcard,setFlashcard] = useState(<Flashcard index={novoindex}/>)
    const [novoindex,setNovoIndex] = useState(props.index)
    const [sucesso, setSucesso] = useState(false)
    
    console.log(props.index)
    function proximaCarta(clique){
        if(novoindex<8){
            setNovoIndex(novoindex + 1)
            // setCartaInicio(clique)
        }
        else{
            setSucesso(true)
        }
    }

    return(      
        {flashcard}



        // <>
        // {cartaInicio
        // ?
        // <Flashcard index={novoindex}/>
        // :
        // (
        // <div className="proxima">
        //     <img onClick={()=>proximaCarta(true)}src="./assets/turn.png"></img>
        // </div>
        // )}
        // </>                
    )
}