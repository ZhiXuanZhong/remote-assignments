import { useEffect, useState, useRef } from 'react'
import DataRow from './DataRow'
import './styles.css'

let page = 1

export default function App() {
  const [repoList, setRepoList] = useState([])
  const dataFetchedRef = useRef(false)

  async function dataFetcher() {
    const res = await fetch(
      `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`
    )
    const data = await res.json()
    setRepoList((prevRepoList) => [...prevRepoList, ...data])
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    dataFetcher()
  }, [])

  function handleMore() {
    dataFetcher()
    page++
  }

  return (
    <div className="App">
      {repoList.map((item) => {
        return <DataRow {...item} key={Math.random()} /> //這邊要用item.id都失敗不知道為何
      })}
      <h1 className="load-more" onClick={handleMore}>
        More
      </h1>
    </div>
  )
}
