import './App.css'

// TODO: Add Sorting Controls
function App() {

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
          <li>
            <label htmlFor="note-1" className='note'>
              <div className='header'>
                <h2 className='title'>Title</h2>
                <button className='note-btn-open' type='button'>Open</button>
                <button className='note-btn-close' type='reset'>Close</button>
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus culpa porro at fuga reprehenderit optio exercitationem doloribus veritatis minima inventore atque voluptate maiores dolore amet nostrum, repudiandae reiciendis pariatur?
              </div>
              <input type="radio" name="note-radio" id="note-1" hidden />
            </label>
          </li>

          <li>
            <label htmlFor="note-2" className='note'>
              <div className='header'>
                <h2 className='title'>Title</h2>
                <button className='note-btn-open' type='button'>Open</button>
                <button className='note-btn-close' type='reset'>Close</button>
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus culpa porro at fuga reprehenderit optio exercitationem doloribus veritatis minima inventore atque voluptate maiores dolore amet nostrum, repudiandae reiciendis pariatur?
              </div>
              <input type="radio" name="note-radio" id="note-2" hidden />
            </label>
          </li>
        </ul>
      </form>

      <button type='button' id='btn-add-more' onClick={AddNote}>+</button>
    </main>
  )
}

export default App
