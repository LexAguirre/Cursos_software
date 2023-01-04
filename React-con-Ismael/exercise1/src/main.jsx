import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack web development'
  const courseInfo = [
    { key: 'fundamentals', part: 'Fundamentals of React', exercises: 10 },
    { key: 'props', part: 'Passing data through props', exercises: 7 },
    { key: 'state', part: 'State of a component', exercises: 14 },
    { key: 'fetch', part: 'Fetching resources from an API', exercises: 9 }
  ]

  return (
    <div>
      <Header title={course} />
      <Content courseInfo={courseInfo} />
      <Total courseInfo={courseInfo} />
    </div>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
