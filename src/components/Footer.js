import { useSelector, useDispatch } from 'react-redux'
import { selectTodo } from '../features/slices/todoSlice'
import { selectFilter, setFilter } from '../features/slices/filterSlice'
import { clearCompleted } from '../features/slices/todoSlice'
import { getters } from '../services/getters'
import { FILTERS } from '../constants/filter'

function Footer() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo).todos
  const filter = useSelector(selectFilter).filter
  const itemsLeft = getters.itemsLeft(todos)
  const completedCount = getters.completedCount(todos)

  const filterTitles = [
    { key: FILTERS.all, value: 'All' },
    { key: FILTERS.active, value: 'Active' },
    { key: FILTERS.completed, value: 'Completed' },
  ]

  function onFilterSelect(filter) {
    dispatch(setFilter({ filter }))
  }

  function onClearCompleted() {
    dispatch(clearCompleted())
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft}</strong>
        <span> {itemsLeft === 1 ? ' item' : ' items'} left</span>
      </span>

      <ul className='filters'>
        {filterTitles.map((filterTitle) => {
          return (
            <li key={filterTitle.key}>
              <a
                href='./#'
                className={filterTitle.key === filter ? 'selected' : ''}
                onClick={() => onFilterSelect(filterTitle.key)}
              >
                {filterTitle.value}
              </a>
            </li>
          )
        })}
      </ul>
      {
        completedCount ? <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button> : null
      }
    </footer>
  )
}

export default Footer
