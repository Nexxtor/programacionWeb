import { useTaskContext } from '../hooks/useTaskContext';
import styles from './TaskList.module.css';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const handleRemoveTask = (index) => {
    dispatch({ type: 'REMOVE_TASK', payload: index });
  };

  return (
    <ul className={styles.list}>
      {state.tasks.map((task, index) => (
        <li key={index} className={styles.item}>
          {task}
          <button
            className={styles.button}
            onClick={() => handleRemoveTask(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
