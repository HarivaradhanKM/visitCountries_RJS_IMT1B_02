import {useState} from 'react'

import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const App = () => {
  const [countries, setCountries] = useState(initialCountriesList)

  const handleVisit = id => {
    const updatedCountries = countries.map(country =>
      country.id === id ? {...country, isVisited: true} : country,
    )
    setCountries(updatedCountries)
  }

  const handleRemove = id => {
    const updatedCountries = countries.map(country =>
      country.id === id ? {...country, isVisited: false} : country,
    )
    setCountries(updatedCountries)
  }

  const visitedCountries = countries.filter(country => country.isVisited)

  return (
    <div className="bg-container">
      <h1 className="countries-heading">Countries</h1>
      <div className="country-container">
        {countries.map(country => (
          <div className="county-line" key={country.id}>
            <p className="country-name">{country.name}</p>
            {country.isVisited ? (
              <p className="visited-button">Visited</p>
            ) : (
              <button
                className="visit-button"
                type="button"
                onClick={() => handleVisit(country.id)}
              >
                Visit
              </button>
            )}
          </div>
        ))}
      </div>

      <h1 className="visited-heading">Visited Countries</h1>
      <div className="flag-container">
        {visitedCountries.length > 0 ? (
          visitedCountries.map(country => (
            <div className="flag-card" key={country.id}>
              <img
                className="flag-image"
                src={country.imageUrl}
                alt="thumbnail"
              />
              <div className="name-with-remove-button">
                <p>{country.name}</p>
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => handleRemove(country.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-visited-countries">
            <p>No Countries Visited Yet!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
