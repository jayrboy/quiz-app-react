# Getting Started with Create React App - Quiz App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Quiz App

```sh
npm install create-react-app
npx create-react-app quiz-app
cd quiz-app && npm start
```

### Create a Project

1. app/App.js

```js
/* eslint-disable */
import { useState, createContext } from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'
import './App.css'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)
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
```

2. app/data

- QuestionData.js (JavaScript Object)

```js
const QuestionData = [
  {
    question: 'ข้อใดไม่ใช่ tag html',
    A: '<react>',
    B: '<a>',
    C: '<p>',
    D: '<h1>',
    answer: 'A',
  },
  {
    question: 'ข้อใดถูกต้องเกี่ยวกับ React',
    A: 'ทำงานฝั่ง Server',
    B: 'ใช้จัดการฐานข้อมูล',
    C: 'เป็น JavaScript Library',
    D: 'ถูกทุกข้อ',
    answer: 'C',
  },
  {
    question: 'ข้อใดคือชื่อ Browser',
    A: 'PHP',
    B: 'React',
    C: 'MySQL',
    D: 'Chrome',
    answer: 'D',
  },
]

export default QuestionData
```

3. app/component

- ./component/Menu.js

```js
import { useContext } from 'react'
import { DataContext } from '../App'

const Menu = () => {
  const { setAppState } = useContext(DataContext)
  return (
    <div className="menu">
      <h1>Menu Component</h1>
      <button onClick={() => setAppState('quiz')}>เริ่มทำแบบข้อสอบ</button>
    </div>
  )
}
export default Menu
```

- ./component/Quiz.js

```js
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App'
import QuestionData from '../data/QuestionData'

const Quiz = () => {
  //   console.log(QuestionData)
  const [current, setCurrent] = useState(0)
  const [selectChoice, setSelectChoice] = useState('')
  const { score, setScore, setAppState } = useContext(DataContext)

  useEffect(() => {
    checkAnswer()
  }, [selectChoice])

  const checkAnswer = () => {
    if (selectChoice !== '') {
      if (selectChoice === QuestionData[current].answer) {
        setScore(score + 1)
        nextQuestion()
      } else {
        nextQuestion()
      }
    }
  }

  const nextQuestion = () => {
    setSelectChoice('')
    if (current === QuestionData.length - 1) {
      setAppState('score')
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="quiz">
      <h1>{QuestionData[current].question}</h1>
      <div className="choices">
        <button onClick={() => setSelectChoice('A')}>
          {QuestionData[current].A}
        </button>
        <button onClick={() => setSelectChoice('B')}>
          {QuestionData[current].B}
        </button>
        <button onClick={() => setSelectChoice('C')}>
          {QuestionData[current].C}
        </button>
        <button onClick={() => setSelectChoice('D')}>
          {QuestionData[current].D}
        </button>
      </div>
      <p>{`${current + 1} / ${QuestionData.length}`}</p>
    </div>
  )
}
export default Quiz
```

- ./component/Score.js

```js
import { useContext } from 'react'
import { DataContext } from '../App'
import QuestionData from '../data/QuestionData'

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext)
  const restartApp = () => {
    setScore(0)
    setAppState('menu')
  }
  return (
    <div className="score">
      <h1>สรุปผลคะแนน</h1>
      <h2>
        {score} / {QuestionData.length}
      </h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}
export default Score
```

#### CSS

- App.css

```css
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.menu,
.quiz,
.score {
  width: 500px;
  height: 500px;
  background-color: lightblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu button,
.quiz button,
.score button {
  width: 300px;
  height: 50px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
}

button:active {
  background: orange;
  color: #fff;
}
```
