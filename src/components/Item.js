import { useState, useRef } from 'react'

function Item(props) {
  const [editing, setEditing] = useState(false)
  const [todo, setTodo] = useState({...props.todo})
  const inputRef = useRef(null)

  function handleCompleted() {
    const completed = !todo.completed
    setTodo((pre) => {
      return {
        ...pre,
        completed
      }
    })
    props.update({id: todo.id, completed })
  }

  function handleEdit() {
    setEditing(() => true)
  }

  function handleRemove() {
    props.remove(todo.id)
  }

  return (
    <li className={[todo.completed ? "completed": "", editing ? "editing": ""].join("") }>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={handleCompleted} />
        <label onDoubleClick={handleEdit}>{ todo.name }</label>
        <button className="destroy" onClick={handleRemove} />
      </div>
    </li>
  )
}

export default Item
