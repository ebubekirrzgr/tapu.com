import './App.scss';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        className="styledButton"
        theme="primary"
        size="default"
        border="off"
        type="submit"
      >
        Sign In
      </Button>
    </div>
  );
}

export default App;
