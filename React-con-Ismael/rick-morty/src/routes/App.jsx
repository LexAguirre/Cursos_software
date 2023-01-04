import Header from '../components/Header'
import CharsGrid from '../components/CharsGrid'

const App = () => {
  return (
    <div className="container mx-auto py-10">
      <Header title="Rick &amp; Morty Database" subtitle="Welcome" />
      <CharsGrid />
    </div>
  )
}

export default App
