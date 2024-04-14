// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatchesDetails} = this.props
    const {
      competingTeamLogo,
      matchStatus,
      competingTeam,
      result,
      id,
    } = recentMatchesDetails

    const newClassName = matchStatus === 'Won' ? 'name-win' : 'name-lose'
    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          className="competing-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="name-head">{competingTeam}</p>
        <p className="name">{result}</p>
        <p className={newClassName}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
