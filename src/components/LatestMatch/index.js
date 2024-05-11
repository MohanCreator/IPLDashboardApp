import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedList = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedList

  return (
    <div className="latest-bg">
      <div className="opanent-team">
        <p className="competing-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="logo-team"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div>
        <p className="right">First Innings</p>
        <p className="right">{firstInnings}</p>
        <p className="right">Second Innings</p>
        <p className="right">{secondInnings}</p>
        <p className="right">Man Of The Match</p>
        <p className="right">{manOfTheMatch}</p>
        <p className="right">Umpires</p>
        <p className="right">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
