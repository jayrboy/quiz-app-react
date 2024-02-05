/* eslint-disable */

import { useState, createContext } from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'
import './App.css'

//TODO: Context React Hook
export const DataContext = createContext()

//TODO: Set State and Context
function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)

  //TODO:
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState === 'menu' && <Menu />}
        {appState === 'quiz' && <Quiz />}
        {appState === 'score' && <Score />}
      </div>
    </DataContext.Provider>
  )
}

export default App
