import { useEffect, useState } from 'react'
import DataRow from './DataRow'
import './styles.css'

export default function App() {
  const [repoList, setRepoList] = useState([])
  const [page, setPage] = useState(1)
  const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`

  async function dataFetcher(isInitial) {
    try {
      const res = await fetch(url)
      const data = await res.json()

      if (isInitial) {
        setRepoList(data)
        return
      }

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
    let isInitial = true

    dataFetcher(isInitial)

    return () => {
      isInitial = false
    }
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
      {repoList.length > 1 && (
        <h1 className="load-more" onClick={handleMore}>
          More
        </h1>
      )}
    </div>
  )
}
