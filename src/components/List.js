import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodo, updateTodo } from '../features/slices/todoSlice'
import Item from './Item'

function Header() {
  const dispatch = useDispatch()
  const todo = useSelector(selectTodo)
  return (
    <section className="main">
      <ul className="todo-list">
        {
          todo.todos.map((todo) => {
            return (
              <Item todo={todo} key={todo.id}/>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Header
