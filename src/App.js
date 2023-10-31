import useDataFetching from "./useDataFetching"

import "./App.css"

function App() {

  const apiUrl = 'https://sujeitoprogramador.com/rn-api/?api=posts'

  const { data: nutri, loading, error } = useDataFetching(apiUrl)

  if (error) {
    return (
      <div className="container">
        <p>Erro ao buscar dados: {error.message}</p>
      </div>
    )
  }

  if(loading){
    return (
      <div className="container">
        <p>Carregando dados...</p>
      </div>
    )
  }

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href={item.capa}>Acessar</a>

          </article>
        ))}
      
    </div>
  );
}

export default App;
