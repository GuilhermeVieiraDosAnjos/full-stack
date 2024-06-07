import {  AiOutlineExclamationCircle, AiFillDelete } from 'react-icons/ai'
import './styles.css'
import './styles-priority.css'
import { useState } from 'react'
import api from '../../services/api'

export const Notes = ({ note, handleDelete, handleChangePriority }) => {
  const [changedNotes, setChangedNotes] = useState('')

  const handleEdit = (e, priority) => {
    e.style.cursor = 'text';
    e.style.borderRadius = "5px";

    if(priority) {
      e.style.boxShadow = "0 0 5px white"
    }else{
      e.style.boxShadow = '0 0 5px gray'
    }
  }
  
  const handleSave = async (e, notes) => {
    e.style.cursor = 'default';
    e.style.boxShadow = 'none';

    if(changedNotes && changedNotes !== notes){
      await api.post(`/content/${note._id}`, {
        notes: changedNotes
      })
    }

  }

  return (
    <>
        <li className={note.priority ? "notepad-infos-priority" : 'notepad-infos'}>
            <div>
              <strong>{note.title}</strong>
              <div>
                <AiFillDelete 
                  size="20"
                  onClick={ () =>handleDelete(note._id)}
                 />
              </div>
            </div>

            <textarea 
              defaultValue={note.notes} 
              onClick={e =>handleEdit(e.target, note.priority)}
              onChange={e=> setChangedNotes(e.target.value)}
              onBlur={e => handleSave(e.target, note.notes)}
              />
            
            <span>
              <AiOutlineExclamationCircle 
                size='20'
                onClick={() => handleChangePriority(note._id)}
                />
            </span>
          </li>
    </>
  )
}
