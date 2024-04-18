import { useState } from 'react'
import './App.css'
import { TNote } from './App.types'

// TODO: Add Sorting Controls
function App() {
  const [notes] = useState<Array<TNote>>([
    { id: crypto.randomUUID(), title: 'Title', content: 'Content' },
    { id: crypto.randomUUID(), title: 'Title', content: 'Content' },
    { id: crypto.randomUUID(), title: 'Title', content: 'Content' },
    { id: crypto.randomUUID(), title: 'Title', content: 'Content' },
    { id: crypto.randomUUID(), title: 'Title', content: 'Content' }
  ])

  const AddNote = () => {
    // TODO: Add new note to the notes collection
  }

  return (
    <main>
      <header>
        <h1>Notes</h1>
      </header>

      <form action="#">
        <ul>
          {notes.map((n, i) => (
            <li key={i}>
              <label htmlFor={n.id} className='note'>
                <div className='header'>
                  <h2 className='title'>{n.title}</h2>
                  <button className='note-btn-open' type='button'>Open</button>
                  <button className='note-btn-close' type='reset'>Close</button>
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus culpa porro at fuga reprehenderit optio exercitationem doloribus veritatis minima inventore atque voluptate maiores dolore amet nostrum, repudiandae reiciendis pariatur?
                </div>
                <input type="radio" name="note-radio" id={n.id} hidden />
              </label>
            </li>
          ))}
        </ul>
      </form>

      <button type='button' id='btn-add-more' onClick={AddNote}>+</button>
    </main>
  )
}

export default App
