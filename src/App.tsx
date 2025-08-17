import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button theme='dark' onClick={() => alert("clicked")}/>
      </header>
    </div>
  );
}

export default App;
