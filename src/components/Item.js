import { useState, useRef, useEffect } from 'react'

function Item(props) {
  const [editing, setEditing] = useState(false)
  const [todo, setTodo] = useState({ ...props.todo })
  const inputRef = useRef(null)

  function handleCompleted() {
    const completed = !todo.completed
    setTodo((pre) => {
      return {
        ...pre,
        completed,
      }
    })
    props.update({ id: todo.id, completed })
  }

  function handleEdit() {
    setEditing(() => true)
  }

  function handleRemove() {
    props.remove(todo.id)
  }

  function handleChange(e) {
    setTodo((pre) => {
      return {
        ...pre,
        name: e.target.value,
      }
    })
  }

  function onBlur() {
    props.update({ id: todo.id, name: todo.name })
    setEditing(() => false)
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      props.update({ id: todo.id, name: todo.name });
      setEditing(() => false)
    }
    if (e.key === 'Escape') {
      setEditing(() => false)
    }
  }

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  return (
    <li
      className={[
        todo.completed ? 'completed' : '',
        editing ? 'editing' : '',
      ].join(' ')}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.completed}
          onChange={handleCompleted}
        />
        <label onDoubleClick={handleEdit}>{todo.name}</label>
        <button className='destroy' onClick={handleRemove} />
      </div>
      <input
        className='edit'
        ref={inputRef}
        value={todo.name}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyUp={handleSubmit}
      />
    </li>
  )
}

export default Item
