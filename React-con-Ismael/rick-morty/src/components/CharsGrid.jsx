import { useState, useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination'

const CharsGrid = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [chars, setChars] = useState([])
  const [info, setInfo] = useState({})

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setChars(data.results)
        setInfo(data.info)
        setIsLoading(false)
      })
  }, [currentPage])

  if (isLoading) {
    return (<p>Loading ...</p>)
  }

  const onPreviousPage = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1)
  const onNextPage = () => setCurrentPage(currentPage + 1)

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {chars.map(char => (
          <Card key={char.id} char={char} />
        ))}
      </div>
      <div className="p-8 text-center">
        <Pagination
          currentPage={currentPage}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </div>
    </div>
  )
}

export default CharsGrid
