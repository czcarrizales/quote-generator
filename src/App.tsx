import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [quote, setQuote] = useState('Choose a category, and press the button to generate a random quote!')
  const [author, setAuthor] = useState('Anonymous')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  
  const generateRandomQuote = async () => {
    setLoading(true)
    axios.get(`https://api.quotable.io/quotes/random?tags=${category}`)
    .then((response) => {
      const randomQuote = response.data[0].content
      const randomQuoteAuthor = response.data[0].author
      setQuote(randomQuote)
      setAuthor(randomQuoteAuthor)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value)
  }

  return (
    <div className='app-main-container'>
      <div className='app-quote-container'>
        <h1>
          {loading ? 'Getting your random quote!' : `"${quote}"`}</h1>
          <h2>
            {loading ? '' : `-${author}`}
          </h2>
      </div>
      <div className='app-dropdown-container'>
        <label htmlFor="category">Category</label>
        <select onChange={(e) => handleCategoryChange(e)} className='app-dropdown-select' name="category" id="category">
          <option value="">All</option>
          <option value="age">Age</option>
          <option value="business">Business</option>
          <option value="courage">Courage</option>
          <option value="love">Love</option>
          <option value="motivational">Motivational</option>
          <option value="wisdom">Wisdom</option>

        </select>
      </div>
      <button className='app-dropdown-button' onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  )
}

export default App
