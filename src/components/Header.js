import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/slices/todoSlice'

function Header() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(() => e.target.value)
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      if(name.trim() !== '') {
        dispatch(createTodo({name}))
        setName(() => '')
      }
    }
  }
  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={name}
        onInput={handleChange}
        onKeyUp={handleSubmit}
      />
    </header>
  )
}

export default Header
