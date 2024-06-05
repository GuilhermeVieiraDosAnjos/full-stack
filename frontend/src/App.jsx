import './App.css'
import './sidebar.css'
import './main.css'
import { Notes } from './Components/Notas/Notes'

function App() {
  return (
    <div id='app'>
      <aside>
        <strong>Caderno de notas</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input  />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea name="" id=""></textarea>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
        </ul>
      </main>
    </div>
  )
}

export default App
