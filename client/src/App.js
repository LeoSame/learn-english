import './App.css';
import { words } from './uaWords3000';
import Trainer from './Components/Trainer/Trainer';

function App() {
  return (
    <div className='container'>
      <Trainer words={words} />
    </div>
  );
}

export default App;
