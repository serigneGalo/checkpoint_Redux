import './App.css';
import Todos from './Component/Todos';
import DisplayTodos from "./Component/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <Todos/>
      <br/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
