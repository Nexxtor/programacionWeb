import { useContext } from 'react';
import { TaskContext } from '../context/TaskProvider'; // Importa el contexto

export const useTaskContext = () => {
  return useContext(TaskContext);
};
