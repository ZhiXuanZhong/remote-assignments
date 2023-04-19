import { useEffect, useState } from 'react'
import DataRow from './DataRow'
import './styles.css'

export default function App() {
  const [repoList, setRepoList] = useState([])
  const [page, setPage] = useState(1)

  async function dataFetcher() {
    try {
      const res = await fetch(
        `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`
      )
      const data = await res.json()

      if (data.length === 0) {
        alert('End of list')
      } else {
        setRepoList((prevRepoList) => [...prevRepoList, ...data])
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    dataFetcher()
    setPage(2)
  }, [])

  function handleMore() {
    dataFetcher()
    setPage((prev) => prev + 1)
  }

  return (
    <div className="App">
      {repoList.map((item) => {
        return <DataRow {...item} key={item.id} />
      })}
      <h1 className="load-more" onClick={handleMore}>
        More
      </h1>
    </div>
  )
}
