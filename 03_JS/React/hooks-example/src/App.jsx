import { TaskProvider } from './context/TaskProvider';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className='container'>
        <h1>To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
