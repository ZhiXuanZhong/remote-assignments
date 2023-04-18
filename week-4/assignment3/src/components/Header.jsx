import { useState } from "react"


function Header() {

  const [title, setTitle] = useState('Welcome Message')

  function handleClick(){
    setTitle('Have a Good Time!')
  }

  return (
    <header className="container container__sec-greeting container--bg-light">
      <h1 className="container__title container__title--super" onClick={handleClick}>
        {title}
      </h1>
    </header>
  )
}

export default Header
