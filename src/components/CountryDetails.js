import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

const CountriesDetails = (props) => {
    const { countries } = props
    let { id } = useParams()

    id = id || countries[0].alpha3Code

    const findCountry = (alpha3Code) => {
        return countries.find(country => {
            return country.alpha3Code === alpha3Code
        })
    }

    const country = findCountry(id)

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    country.borders.map(border => {
                                        const borderCountry = findCountry(border)
                                        return (
                                            <li key={border}>
                                                <Link to={`/${border}`}>{borderCountry.name.common}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountriesDetails