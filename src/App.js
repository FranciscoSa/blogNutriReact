import {React, useEffect, useState } from "react";
import './stily.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    
      fetch(url)
        .then((returnAPI)=> returnAPI.json())
        .then((jsonAPI)=> {
          setPosts(jsonAPI)
        })
    }

    loadApi();
  }, []);
 
  return (
    <div>
      <header>
        <strong id="labelTitulo">Nutri React</strong>
      </header>

      <div className="container">
        {posts.map((post)=>{
            return(
              <article key={post.id} className="post">
                <h1 className="titulo">{post.titulo}</h1>
                <img src={post.capa} alt={post.titulo} className="postImg"/>
                <p className="subtitulo">{post.subtitulo}</p>
                <a className="botaoAcessar">Acessar</a>
              </article>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
