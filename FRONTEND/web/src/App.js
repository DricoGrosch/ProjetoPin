import './global.css';
import './App.css';
import './SideBar.css';
import React from 'react';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form method='post'>
          <div className="inputBlock">
            <label htmlFor='github_username'>Usuariodo git</label>
            <input name='github_username' id='github_username' required></input>
          </div>
          <div className="inputBlock">
            <label htmlFor='techs'>Tecopnologias</label>
            <input name='techs' id='techs'></input>
          </div>

          <div className='inputGroup'>
            <div className="inputBlock">
              <label htmlFor='lat'>Latitude</label>
              <input name='lat' id='lat'></input>
            </div>

            <div className="inputBlock">
              <label htmlFor='long'>Longitude</label>
              <input name='long' id='long'></input>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </aside>
      <main>


      </main>
    </div>

  );
}

export default App;
