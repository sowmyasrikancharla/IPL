// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {TeamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      ID: id,
      teamBannerUrl: data.team_banner_url,
      competingTeam: data.latest_match_details.competing_team,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      result: data.latest_match_details.result,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      umpires: data.latest_match_details.umpires,
      recentMatches: data.recent_matches,
    }
    const formattedRecentMatches = newData.recentMatches.map(eachMatch => ({
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      TeamDetails: newData,
      isLoading: false,
      formattedRecent: formattedRecentMatches,
    })
  }

  render() {
    const {TeamDetails, isLoading, formattedRecent} = this.state
    const {
      ID,
      teamBannerUrl,
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      recentMatches,
    } = TeamDetails
    console.log(recentMatches)
    return (
      <div>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={ID}>
            <img src={teamBannerUrl} className="banner" alt="team banner" />
            <h2 className="teamMatches-head">Latest Matches</h2>
            <ul>
              <LatestMatch TeamDetails={TeamDetails} key={TeamDetails.ID} />
            </ul>
            <ul className="recent-matches-con">
              {formattedRecent.map(eachMatch => (
                <MatchCard
                  recentMatchesDetails={eachMatch}
                  key={eachMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
