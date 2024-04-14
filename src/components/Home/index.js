// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <Link to="/" className="no-link">
        <div className="bg-con">
          <div className="logo-head-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-head">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="teams-list-con">
              {teamsList.map(each => (
                <TeamCard key={each.id} teamDetails={each} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
