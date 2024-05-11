import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const updatedList = {
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    manOfTheMatch: recentMatch.man_of_the_match,
    matchStatus: recentMatch.match_status,
    result: recentMatch.result,
  }

  const {competingTeam, competingTeamLogo, matchStatus, result} = updatedList

  const lostorWin = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="container-card">
      <img
        className="logo-card"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${lostorWin}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
