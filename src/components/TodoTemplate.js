import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Manage schedule</div>
      <div className="content">{children}</div>
    </div>
  )
}

export default TodoTemplate;