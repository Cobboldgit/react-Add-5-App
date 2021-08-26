import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
