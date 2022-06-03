import { Link } from 'react-router-dom'

const CountriesList = (props) => {

    const { countries } = props


    return (
        <ul
            className='col-5'
            style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            {
                countries.map(country => {
                    return <Link
                        className='list-group-item list-group-item-action'
                        to={country.alpha3Code}
                        key={country.alpha3Code}>
                        <li className='list-group-item list-group-item-action ' >
                            <img className='flag-img'
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`}
                                alt={country.alpha2Code} />
                            {country.name.common}
                        </li>
                    </Link>
                })
            }
        </ul>
    )
}

export default CountriesList