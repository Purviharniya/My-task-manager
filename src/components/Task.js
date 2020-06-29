import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import { faTrashAlt,faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="icon"/>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
        <FontAwesomeIcon icon={faPen} className="icon"/>
        </button>
      </div>
    </li>
  )
}

export default Task
