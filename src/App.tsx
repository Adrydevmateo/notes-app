import './App.css'
import NoteComposable from './notes/note.composable'
import Note from './notes/note.component'
import { MouseEvent, useState } from 'react'

// TODO: Add Sorting Controls
function App() {
  const { tabletWidth, desktopWidth, col1, col2, col3, AddNote, EditNote, DeleteNote } = NoteComposable()

  const [isCreateNoteVisible, setIsCreateNoteVisible] = useState<boolean>(false)

  const ToggleCreateNote = () => setIsCreateNoteVisible((old) => !old)

  const HandleCreateNote = (e: MouseEvent): void => {
    e.preventDefault()

    const title = document.getElementById('create-title') as HTMLInputElement
    const content = document.getElementById('create-content') as HTMLInputElement

    AddNote(title.value, content.value)

    ToggleCreateNote()
  }

  return (
    <main className={`${isCreateNoteVisible ? 'creating-note' : ''}`}>
      <header>
        <h1>Notes</h1>
      </header>

      <form action="#" id='notes-list'>
        <ol>
          {col1.map((m, i) => <li key={i}><Note note={m} Edit={() => EditNote(m.id)} Delete={() => DeleteNote(m.id)} /></li>)}
        </ol>

        {
          innerWidth >= tabletWidth && col2.length > 0 &&
          <ol>
            {col2.map((m, i) => <li key={i}><Note note={m} Edit={() => EditNote(m.id)} Delete={() => DeleteNote(m.id)} /></li>)}
          </ol>
        }

        {
          innerWidth >= desktopWidth && col3.length > 0 &&
          <ol>
            {col3.map((m, i) => <li key={i}><Note note={m} Edit={() => EditNote(m.id)} Delete={() => DeleteNote(m.id)} /></li>)}
          </ol>
        }
      </form>

      {
        isCreateNoteVisible &&
        <form action="#" id='create-note'>
          <div id='controls'>
            <h2 id='title'>Create Note</h2>
            <button type='submit' id='save' onClick={HandleCreateNote}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v14H3V3h14zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z" /></svg></button>
          </div>
          <input type="text" name="create-title" id="create-title" placeholder='Note Title' autoComplete='off' />
          <input type="text" name="create-content" id="create-content" placeholder='Note Content' autoComplete='off' />
        </form>
      }

      <button type='button' id='btn-add-more' onClick={ToggleCreateNote}>
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
      </button>
    </main>
  )
}

export default App
