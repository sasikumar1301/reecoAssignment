import Navbar from './components/Navbar';
import DetailsSection from './components/ds';
import ProductsList from './components/Orders';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DetailsSection/>
      <ProductsList/>

    </div>
  );
}

export default App;
