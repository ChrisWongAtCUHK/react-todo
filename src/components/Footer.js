import { useSelector } from 'react-redux'
import { selectTodo } from '../features/slices/todoSlice'
import { getters } from '../services/getters'

function Footer() {
  let todos = useSelector(selectTodo).todos
  const itemsLeft = getters.itemsLeft(todos)

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft}</strong><span> { itemsLeft === 1 ? " item" : " items" } left</span>
      </span>
    </footer>
  )
}

export default Footer
