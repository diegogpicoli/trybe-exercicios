import { tab } from '@testing-library/user-event/dist/tab';
import './App.css';
import Task from './Task';

const tarefas = ['Estudar', 'Jogar', 'Malhar', 'Ficar atoa']

function App() {
  return (<>
    <ul>
      {tarefas.map((tarefa) => Task(tarefa))}
    </ul>
  </>);
}

export default App;
