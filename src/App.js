import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState()
  const [loading, setLoading] = useState('true')

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data.reverse())
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="containa">
        <div className="row">
          {loading && <p>Loading...</p>}
          {
            !loading && (
              <>
                <CountriesList countries={countries} />
                <Routes>
                  <Route path='/' element={<CountriesDetails countries={countries} />} />
                  <Route path='/:id' element={<CountriesDetails countries={countries} />} />
                </Routes>
              </>
            )
          }


        </div>
      </div>

    </div>
  );
}

export default App;
