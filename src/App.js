import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import List from './components/List'
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
      </section>
    </div>
  )
}

export default App
