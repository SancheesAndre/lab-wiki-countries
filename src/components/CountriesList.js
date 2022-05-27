import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import countriesData from './../countries.json'

const CountriesList = (props) => {

    const [countries, setCountries] = useState(countriesData)


    console.log('countries', countries)

    return (
        <ul className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {countries.map((country) => {
               return <Link className='list-group-item' to={country.alpha3Code}><li className='list-group-item list-group-item-action' >{country.alpha3Code} {country.name.official}</li></Link>
            })}
        </ul>
    )
}

export default CountriesList