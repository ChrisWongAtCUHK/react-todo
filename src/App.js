import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { loadTodo } from './features/slices/todoSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodo())
  }, [dispatch])

  return (
    <div className='App'>
      <section className='todoapp'>
        <Header />
        <List />
        <Footer />
      </section>
    </div>
  )
}

export default App
