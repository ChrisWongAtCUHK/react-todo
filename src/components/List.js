import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodo, updateTodo } from '../features/slices/todoSlice'
import Item from './Item'

function Header() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo).todos

  function onUpdate(todo) {
    dispatch(updateTodo({ todo }))
  }

  return (
    <section className='main'>
      <ul className='todo-list'>
        {todos.map((todo) => {
          return <Item todo={todo} key={todo.id} update={onUpdate} />
        })}
      </ul>
    </section>
  )
}

export default Header
