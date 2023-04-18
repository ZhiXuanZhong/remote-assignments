import { useState } from 'react'
import Counter from './Counter'
import './styles.css'

export default function App() {
  const [nums, setNums] = useState([0, 0, 0])

  function updateNums(id) {
    const newNum = nums[id] + 1
    setNums([...nums.slice(0, id), newNum, ...nums.slice(id + 1)])
  }

  function addAll() {
    setNums((prevNums) => prevNums.map((num) => num + 1))
  }

  return (
    <div className="App">
      <button onClick={addAll}>All + 1</button>

      <div></div>

      {nums.map((num, index) => {
        return <Counter count={num} onAdd={updateNums} id={index} key={index} />
      })}

      <div></div>

      <button onClick={() => setNums((prevNums) => [...prevNums, 0])}>
        Add a Counter
      </button>
    </div>
  )
}
