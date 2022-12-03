import "./App.css"
import { useState } from "react"

function App() {
  // Initiate our state variable which will store the text we want read aloud
  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()

  // Create speechHandler function that takes our (msg) variable as parameter. 
  const speechHandler = (msg) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }

  return (
    <div className='App'>
      <h1>React Text to Speech App</h1>
      <input
        type='text'
        value={ourText}
        placeholder="Enter text"
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>Speak</button>
    </div>
  )
}

export default App
