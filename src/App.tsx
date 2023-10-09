import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [quote, setQuote] = useState('Choose a category, and press the button to generate a random quote!')
  
  const generateRandomQuote = async () => {
    axios.get('https://api.quotable.io/quotes/random')
    .then((response) => {
      const randomQuote = response.data[0].content
      setQuote(randomQuote)
    })
  }

  return (
    <>
      <div>
        <h1>"{quote}"</h1>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="test">Test</option>
        </select>
      </div>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </>
  )
}

export default App
