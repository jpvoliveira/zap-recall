export default function TelaFracasso({erro}){
    return(
        <div className="tela-sucesso">
            <div className="posicao-final">   
                <div className="textos" >
                    <p>Putz..<img src="./assets/sad.png"></img></p>
                    <h2>Você esqueceu {erro} flashcards..<br></br>Não desanime! Na próxima você consegue!</h2>
                </div>
                <div className="botao-reiniciar" onClick={()=>window.location.reload(true)}>
                    <span>Tente Novamente</span>
                    <img src="./assets/next.png"></img>
                </div>
            </div>    
        </div>
    )
}