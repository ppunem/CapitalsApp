import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  changeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  correspondingCountry = () => {
    const {activeId} = this.state
    const countryDetails = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return countryDetails.country
  }

  render() {
    const {activeId} = this.state
    const country = this.correspondingCountry(activeId)

    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Countries And Capitals</h1>
          <div className="input-capital">
            <select id="capital" onChange={this.changeCapital}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capital">is capital of which country?</label>
          </div>
          <p className="Country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
