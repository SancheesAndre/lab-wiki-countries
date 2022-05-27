import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
