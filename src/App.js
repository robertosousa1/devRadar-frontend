import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/17255765?s=400&u=3f3723d564c8ae3670f8931a73565c2120cdb3cd&v=4" alt="Roberto Alves" />
              <div className="user-info">
                <strong>Roberto Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer/Developer, pursuing a bachelor's in Software Engineering and Artificial Intelligence. Data Science enthusiastic.</p>
            <a href="https://github.com/robertosousa1">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/17255765?s=400&u=3f3723d564c8ae3670f8931a73565c2120cdb3cd&v=4" alt="Roberto Alves" />
              <div className="user-info">
                <strong>Roberto Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer/Developer, pursuing a bachelor's in Software Engineering and Artificial Intelligence. Data Science enthusiastic.</p>
            <a href="https://github.com/robertosousa1">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/17255765?s=400&u=3f3723d564c8ae3670f8931a73565c2120cdb3cd&v=4" alt="Roberto Alves" />
              <div className="user-info">
                <strong>Roberto Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer/Developer, pursuing a bachelor's in Software Engineering and Artificial Intelligence. Data Science enthusiastic.</p>
            <a href="https://github.com/robertosousa1">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/17255765?s=400&u=3f3723d564c8ae3670f8931a73565c2120cdb3cd&v=4" alt="Roberto Alves" />
              <div className="user-info">
                <strong>Roberto Alves</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Engineer/Developer, pursuing a bachelor's in Software Engineering and Artificial Intelligence. Data Science enthusiastic.</p>
            <a href="https://github.com/robertosousa1">Acessar perfil no Github</a>
          </li>
        </ul>          
      </main>
    </div>
  );
}

export default App;
