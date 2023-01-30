import NavBar from './NavBar'
import NewsList from './NewsList'
import NewsAddForm from './NewsAddForm'
import NewsFilter from './NewsFilter'
import '../index.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  )
}

export default App
