import { useState, useRef } from 'react'

function Item(props) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(props.todo.name)
  const inputRef = useRef(null)

  function handleCompleted() {
    props.update({id: props.todo.id, completed: !props.todo.completed})
  }

  function handleEdit() {

  }

  return (
    <li className={[props.todo.completed ? "completed": "", editing ? "editing": ""].join("") }>
      <div className="view">
        <input className="toggle" type="checkbox" checked={props.todo.completed} onChange={handleCompleted} />
        <label onDoubleClick={handleEdit}>{ name }</label>
      </div>
    </li>
  )
}

export default Item
