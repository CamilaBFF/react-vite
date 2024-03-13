import "./style.css"
const Header = () => {
  return (
    <header className="container">
      <div className="box_logo">
        <img src="public/IFood_logo.svg.png" className="logo"/>
      </div>
    <nav className="content">
          <a className="link">Entregador</a>
          <a className="link">Restaurante e Mercado</a>
          <a className="link">Ifood Card</a>
    </nav>
    <div className="cadastro_box">
      <nav>
        <a className="criar">criar conta</a>
      </nav>
      <button className="entrar">Entrar</button>
    </div>
  </header>
  )
}

export default Header
