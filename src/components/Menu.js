import { useContext } from 'react'
import { DataContext } from '../App'

const Menu = () => {
  //TODO: define a variable
  const { setAppState } = useContext(DataContext)

  //TODO:
  return (
    <div className="menu">
      <h1>Menu Component</h1>
      <button onClick={() => setAppState('quiz')}>เริ่มทำแบบข้อสอบ</button>
    </div>
  )
}
export default Menu
