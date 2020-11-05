import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome'
import Path from './components/Path'
import Recommend from './components/Recommend'
import Features from './components/Features'


function App() {
  return (
    <div>
      <Welcome />
      <Path />
      <Recommend />
      <Features />
    </div>
  );
}

export default App;
