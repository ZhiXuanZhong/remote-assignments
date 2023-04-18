function Counter(props) {
  return (
    <>
      <button onClick={() => props.onAdd(props.id)}>+1</button>
      <label> {props.count}</label>
      <div></div>
    </>
  )
}

export default Counter
