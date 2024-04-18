import './App.css'

// TODO: Add Sorting Controls
function App() {
  return (
    <main>
      <header>
        <h1>Notes</h1>
      </header>

      <div className='note'>
        <h2 className='title'>Title</h2>
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus culpa porro at fuga reprehenderit optio exercitationem doloribus veritatis minima inventore atque voluptate maiores dolore amet nostrum, repudiandae reiciendis pariatur?
        </div>
      </div>

      <button type='button' id='btn-add-more'>+</button>
    </main>
  )
}

export default App
