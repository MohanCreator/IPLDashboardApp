import './index.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import Loader from 'react-loader-spinner'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    bgClass: '',
    recentMatches: [],
    latestMatchDetails: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
      teamBannerUrl: data.team_banner_url,
    }
    const {recentMatches, latestMatchDetails, teamBannerUrl} = updatedData
    this.setState({
      recentMatches,
      latestMatchDetails,
      teamBannerUrl,
      bgClass: id.toLowerCase(),
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      bgClass,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state

    return isLoading ? (
      <div testid="loader" className="loder-cont">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`teamMatchesContainer ${bgClass}`}>
        <img className="banner" src={teamBannerUrl} alt="team banner" />
        <div className="para">
          <p className="latest">Latest Matches</p>
        </div>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="list-of-matches">
          {recentMatches.map(eachList => (
            <MatchCard key={eachList.id} recentMatch={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
