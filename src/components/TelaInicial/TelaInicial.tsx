import "./style.css"
const TelaInicial = () => {
  return (
    <section>
      <div className="box_one">
        <img src="public/Design sem nome.png" className="alimentos_one"/>
      </div>
      <div className="box_text_principal">
        <span className="text_principal"> Faça mercado no iFood </span>
        <text>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</text>
        <div className="caixa_pesquisa">
          <input type="text" placeholder="Em qual endereço você está?" className="digitação"/>
          <button className="botão_ver">Ver mercados próximos</button>
        </div>
      </div>
      <div className="box_two">
        <img src="public/Design sem nome (1).png" className="alimentos_two"/>
      </div>
    </section>
  )
}

export default TelaInicial
