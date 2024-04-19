import './App.css'
import NoteComposable from './notes/note.composable'
import Note from './notes/note.component'

// TODO: Add Sorting Controls
function App() {
  const { tabletWidth, desktopWidth, col1, col2, col3, AddNote, DeleteNote } = NoteComposable()
  return (
    <main>
      <header>
        <h1>Notes</h1>
      </header>

      <form action="#" id='notes-list'>
        <ol>
          {col1.map((m, i) => <li key={i}><Note note={m} Delete={() => DeleteNote(m.id)} /></li>)}
        </ol>

        {
          innerWidth >= tabletWidth && col2.length > 0 &&
          <ol>
            {col2.map((m, i) => <li key={i}><Note note={m} Delete={() => DeleteNote(m.id)} /></li>)}
          </ol>
        }

        {
          innerWidth >= desktopWidth && col3.length > 0 &&
          <ol>
            {col3.map((m, i) => <li key={i}><Note note={m} Delete={() => DeleteNote(m.id)} /></li>)}
          </ol>
        }
      </form>

      <button type='button' id='btn-add-more' onClick={AddNote}>
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
      </button>
    </main>
  )
}

export default App
