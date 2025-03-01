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

  }

  return (
    <li className={[todo.completed ? "completed": "", editing ? "editing": ""].join("") }>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={handleCompleted} />
        <label onDoubleClick={handleEdit}>{ todo.name }</label>
      </div>
    </li>
  )
}

export default Item
