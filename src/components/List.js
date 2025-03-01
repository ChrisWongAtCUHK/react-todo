import { useDispatch, useSelector } from 'react-redux'
import {
  selectTodo,
  updateTodo,
  removeTodo,
  completeAll,
} from '../features/slices/todoSlice'
import { selectFilter } from '../features/slices/filterSlice'
import { getters } from '../services/getters'
import Item from './Item'

function Header() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo).todos
  const filter = useSelector(selectFilter).filter
  const visibleTodos = getters.visibleTodos(todos, filter)

  function onUpdate(todo) {
    dispatch(updateTodo({ todo }))
  }

  function onRemove(id) {
    dispatch(removeTodo({ id }))
  }

  function onCompleteAll() {
    dispatch(completeAll())
  }

  return (
    <section className='main'>
      <input id='toggle-all' className='toggle-all' type='checkbox' readOnly />
      <label htmlFor='toggle-all' onClick={onCompleteAll}></label>
      <ul className='todo-list'>
        {visibleTodos.map((todo) => {
          return (
            <Item
              todo={todo}
              key={JSON.stringify(todo)}
              update={onUpdate}
              remove={onRemove}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Header
