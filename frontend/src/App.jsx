//Import de Arquivos Locais
import './App.css'
import './sidebar.css'
import './main.css'
import api from './services/api'

//Import de Componentes
import { Notes } from './Components/Notas/Notes'
import {  useState, useEffect } from 'react'
import { RadioBtn } from './Components/RadioButton/RadioBtn'

function App() {
  const [selectedValue, setSelectedValue] = useState('all');
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  
  useEffect(()=> {
    getAllNotes()  
  }, [])//Faz a chamada na API para puxar todas as notas
  
  async function getAllNotes() {
    const response = await api.get('/annotations');

    setAllNotes(response.data)
  }

  const loadNotes = async (options) => {
    const params = {priority: options};
    const res = await api.get("/priorities", {params})

    if(res){
      setAllNotes(res.data)
    }
  }

  const handleChange = (value) => {
    setSelectedValue(value);

    if(value !== 'all'){
      loadNotes(value)
    } else{
      getAllNotes()
    }
  }

  const handleDelete = async (id)=> {

    const deletedNote = await api.delete(`/annotations/${id}`);

    if(deletedNote.status === 200) {
      setAllNotes(allNotes.filter(note => note._id !== id))
    }

  }

  async function handleChangePriority(id) {
    const changePriority = await api.post(`/priorities/${id}`);

    if(changePriority && selectedValue !== 'all') {
      loadNotes(selectedValue);
    }else if(changePriority){
      getAllNotes(); 
    }
  }

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    const response  = await api.post('/annotations', {
      title,
      notes,
      priority : false
    })

    setTitle('')
    setNotes('')

    if(selectedValue !== "all"){
      getAllNotes()
    }else{
      setAllNotes([...allNotes, response.data])
    }

    setSelectedValue('all')

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
              maxLength={30}
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

          <RadioBtn
            handleChange={(e) => handleChange(e.target.value)}
            selectedValue={selectedValue}
          />
        </form>
      </aside>
      <main>
        <ul>
          {
            allNotes.map(note => (
              <Notes 
                key={note._id} 
                note={note}
                handleDelete = {handleDelete}
                handleChangePriority= {handleChangePriority}
                 />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App
