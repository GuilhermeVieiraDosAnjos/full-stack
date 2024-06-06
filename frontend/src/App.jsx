import './App.css'
import './sidebar.css'
import './main.css'
import './Components/Notas/RadioBtn'
import api from './services/api'

import { Notes } from './Components/Notas/Notes'
import {  useState, useEffect } from 'react'
import { RadioBtn } from './Components/Notas/RadioBtn'

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  
  useEffect(()=> {
    async function getAllNotes() {
      const response = await api.get('/annotations');

      setAllNotes(response.data)

    }

    getAllNotes()

  }, [])

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    const response  = await api.post('/annotations', {
      title,
      notes,
      priority : false
    })

    setTitle('')
    setNotes('')

    setAllNotes([...allNotes, response.data])
  }

  useEffect(()=> {
      setIsEnabled(title, notes)
    }, [title, notes])

  return (
    <div id='app'>
      <aside>
        <strong>Caderno de notas</strong>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input 
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea 
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            ></textarea>
          </div>

          <button 
          type='submit'
          id='btn_submit'
          className={isEnabled ? 'enabled' : 'disabled'}
          >
            Salvar
          </button>

          <RadioBtn />
        </form>
      </aside>
      <main>
        <ul>
          {
            allNotes.map(note => (
              <Notes key={note.id} note={note} />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App
