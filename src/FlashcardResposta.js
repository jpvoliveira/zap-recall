export default function Flashcard(){
    return(
        <div className="flashcard">
            <div className="cabecalho-card">
                <div className="pergunta-pequena">Pergunta</div> 
                <div className="contador">1/8</div>
            </div>
            <div className="resposta">
                <p>Resposta</p>
            </div>
            <div className="nota">
                <div className="tipo-nota borda-preta">Aprendi agora</div>
                <div className="tipo-nota borda-vermelha">Não lembrei</div>
                <div className="tipo-nota borda-verde">Lembrei com esforço</div>
                <div className="tipo-nota borda-amarela">Zap!</div>
            </div>
        </div>

    )
}