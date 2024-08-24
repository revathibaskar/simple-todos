import './index.css'

const TodoItem = props => {
  const {todoDetail, deleteTodo} = props
  const {title, id} = todoDetail
  const onChange = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-con">
      <p className="title">{title}</p>
      <button type="button" className="btn-style" onClick={onChange}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
