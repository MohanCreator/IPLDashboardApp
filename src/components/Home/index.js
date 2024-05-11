import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, listOfTeams: []}

  componentDidMount() {
    this.getListOfTeams()
  }

  getListOfTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedList = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedList)
    this.setState({isLoading: false, listOfTeams: updatedList})
  }

  render() {
    const {isLoading, listOfTeams} = this.state
    return (
      <div className="bg-con">
        {isLoading ? (
          <div testid="loader" className="loder-cont">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="logo-con">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="heading">IPL DASHBOARD</h1>
            </div>
            <ul className="teams-container">
              {listOfTeams.map(eachList => (
                <TeamCard key={eachList.id} eachList={eachList} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
