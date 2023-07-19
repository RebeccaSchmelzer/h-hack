import './App.css';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Signin/>
      <Signup />
    </div>
  );
}

export default App;
