import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachList} = props
  const {id, name, teamImageUrl} = eachList
  return (
    <Link to={`/team-matches/${id}`}>
      <div className="team-card">
        <img className="image" src={teamImageUrl} alt={name} />
        <p className="name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
