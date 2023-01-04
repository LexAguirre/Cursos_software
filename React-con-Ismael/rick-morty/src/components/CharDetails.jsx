import { useState, useEffect } from 'react'

const CharDetails = ({ charId }) => {
  const [char, setChar] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      .then(res => res.json())
      .then(data => {
        setChar(data)
        setIsLoading(false)
      })
  }, [])

  function showCharStatusIcon(status) {
    if (status === 'Alive') {
      return <span>&#128515;</span>
    } else if (status === 'Dead') {
      return <span>&#128543;</span>
    } else {
      return <span>&#128566;</span>
    }
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className="section mx-auto py-10">
      <div className="text-center">
        <h2 className="text-indigo-600 font-semibold uppercase">Char Details</h2>
        <h1 className="font-black text-stone-800 text-6xl">{char.name}</h1>
        <img
          className="max-w-lg w-full rounded-lg mx-auto py-10"
          src={char.image} 
          alt={char.name}
        />
        <p className="text-lg">{char.name} is a {char.species} from {char.origin.name} and currently {char.status} {showCharStatusIcon(char.status)} in the series.</p>
      </div>
    </div>
  )
}

export default CharDetails
