import { Link, useParams } from 'react-router-dom'
import CharDetails from '../components/CharDetails'

const Char = () => {
  let { charId } = useParams()

  return (
    <div className="text-center">
      <CharDetails charId={charId} />
      <Link to="/">
        <button
          className="px-4 py-2 bg-indigo-600 text-white font-semibold mx-4 rounded-lg"
        >
          Go Back
        </button>
      </Link>
    </div>
  )
}

export default Char
