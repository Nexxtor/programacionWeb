import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

// Inicializa el estado
const initialState = { tasks: [] };

// Definir el reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

// Crea el contexto
export const TaskContext = createContext();

// Componente TaskProvider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Validating PropTypes for the children prop
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
