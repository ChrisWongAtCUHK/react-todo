import { useDispatch, useSelector } from 'react-redux'
import {
  selectTodo,
  updateTodo,
  removeTodo,
  completeAll,
} from '../features/slices/todoSlice'
import Item from './Item'

function Header() {
  const dispatch = useDispatch()
  let todos = useSelector(selectTodo).todos

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
        {todos.map((todo) => {
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
