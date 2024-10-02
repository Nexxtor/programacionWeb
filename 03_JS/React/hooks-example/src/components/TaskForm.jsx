import { useState } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
