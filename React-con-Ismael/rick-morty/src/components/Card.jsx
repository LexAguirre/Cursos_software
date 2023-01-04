import { Link } from 'react-router-dom'

const Card = ({ char }) => {
  const {
    name,
    image,
    id,
    species,
    status,
    gender,
  } = char

  return (
    <Link to={`/char/${id}`}>
      <div className="max-w-sm overflow-hidden">
        <img className="w-full rounded-lg shadow-lg hover:brightness-110" src={image} alt={name} />
        <div className="pt-4 pb-2">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="pb-8">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{species}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{status}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{gender}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
