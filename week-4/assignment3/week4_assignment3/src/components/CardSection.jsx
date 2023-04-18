import { useState } from 'react'

function CardSection() {
  const [isClick, setIsClick] = useState(false)

  function handleClick() {
    setIsClick(true)
  }

  return (
    // 收尾把cards改成components
    <section className="container">
      <h2 className="container__title">Section Title</h2>

      <div className="container container__cards">
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 1</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 2</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 3</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 4</h1>
        </div>
      </div>

      <button className="btn btn--primary" onClick={handleClick}>
        Call to Action
      </button>

      <div className="container container__cards" style={isClick ? null : {display: 'none'}}>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 5</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 6</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 7</h1>
        </div>
        <div className="card card--placeholder">
          <h1 className="card--title">Content Box 8</h1>
        </div>
      </div>
    </section>
  )
}

export default CardSection
