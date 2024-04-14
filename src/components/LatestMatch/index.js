// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {TeamDetails} = this.props
    const {
      ID,
      teamBannerUrl,
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = TeamDetails
    return (
      <li className="latest-matches-con">
        <div>
          <p className="name-head">{competingTeam}</p>
          <p className="name-head">{date}</p>
          <p className="name">{venue}</p>
          <p className="name">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <h3 className="name">First Innings</h3>
          <p className="name">{firstInnings}</p>
          <h3 className="name">Second Innings</h3>
          <p className="name">{secondInnings}</p>
          <h3 className="name">Man Of The Match</h3>
          <p className="name">{manOfTheMatch}</p>
          <h5 className="name">Umpires</h5>
          <p className="name">{umpires}</p>
        </div>
      </li>
    )
  }
}

export default LatestMatch
