import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodo, updateTodo, removeTodo } from '../features/slices/todoSlice'
import Item from './Item'

function Header() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo).todos

  function onUpdate(todo) {
    dispatch(updateTodo({ todo }))
  }

  function onRemove(id) {
    dispatch(removeTodo({ id }))
  }

  return (
    <section className='main'>
      <ul className='todo-list'>
        {todos.map((todo) => {
          return <Item todo={todo} key={todo.id} update={onUpdate} remove={onRemove}/>
        })}
      </ul>
    </section>
  )
}

export default Header
