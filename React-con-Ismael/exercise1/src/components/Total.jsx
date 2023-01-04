const Total = ({ courseInfo }) => {
  const totalCount = () => {
    let total = 0
    courseInfo.map(info => {
      total += info.exercises
    })

    return total
  }

  return (
    <p>Number of exercises: {totalCount()}</p>
  )
}

export default Total
