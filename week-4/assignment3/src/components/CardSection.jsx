import { useState } from 'react'
import Card from './Card'

function CardSection() {
  const [isClick, setIsClick] = useState(false)

  function handleClick() {
    setIsClick(true)
  }

  const featuresAds = [
    { key: 1, title: 'Content Box 1' },
    { key: 2, title: 'Content Box 2' },
    { key: 3, title: 'Content Box 3' },
    { key: 4, title: 'Content Box 4' },
  ]
  const ctaOffers = [
    { key: 5, title: 'Content Box 5' },
    { key: 6, title: 'Content Box 6' },
    { key: 7, title: 'Content Box 7' },
    { key: 8, title: 'Content Box 8' },
  ]

  return (
    <section className="container">
      <h2 className="container__title">Section Title</h2>

      <div className="container container__cards">
        {featuresAds.map( item => <Card title={item.title} key={item.key} />)}
      </div>

      <button className="btn btn--primary" onClick={handleClick}>
        Call to Action
      </button>

      <div className="container container__cards" style={isClick ? null : {display: 'none'}}>
        {ctaOffers.map( item => <Card title={item.title} key={item.key} />)}
      </div>
    </section>
  )
}

export default CardSection
