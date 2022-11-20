import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
function App() {
  const getRandom = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }
  const [quoteRandom, setQuoteRandom] = useState(getRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(getRandom(colors))

  const handleClick = () => {
    setQuoteRandom(getRandom(quotes))
    setcolorRandom(getRandom(colors))
  }
  const objStyle = {
    backgroundColor: colorRandom
  }
  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
