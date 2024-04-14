import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card-con">
          <img src={teamImageUrl} className="team-image-set" alt={name} />
          <p className="name-head">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
