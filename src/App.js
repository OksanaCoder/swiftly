import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome'
import Path from './components/Path'
import Features from './components/Features'
import FeaturesMentors from './components/FeaturesMentors'
import FeaturesCompany from './components/FeaturesCompany'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Welcome />
      <Path />
      <Features />
      <FeaturesMentors />
      <FeaturesCompany />
      <Footer />
    </div>
  );
}

export default App;
