const Pagination = ({ currentPage, onPreviousPage, onNextPage }) => {
  return (
    <div>
      <button
        className="px-4 py-2 bg-indigo-600 text-white font-semibold mx-4 rounded-lg"
        onClick={onPreviousPage} disabled={!currentPage > 1}
      >
        Previous page
      </button>
      <span className="font-bold text-2xl">{currentPage}</span>
      <button
        className="px-4 py-2 bg-indigo-600 text-white font-semibold mx-4 rounded-lg"
        onClick={onNextPage}
      >
        Next page
      </button>
    </div>
  )
}

export default Pagination
