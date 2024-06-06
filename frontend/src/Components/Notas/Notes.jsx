

export const Notes = ({ note }) => {
  return (
    <>
        <li className="notepad-infos">
            <div>
              <strong>{note.title}</strong>
              <div>
                x
              </div>
            </div>

            <textarea name="" defaultValue={note.notes} id=""></textarea>
            
            <span>!</span>
          </li>
    </>
  )
}
