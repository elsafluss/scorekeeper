import React, { Component } from "react"
import { getTeams } from "./Utility"
import Teams from "./Teams"
import HomeTeam from "./HomeTeam"
import AwayTeam from "./AwayTeam"
import Players from "./Players"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allActiveTeams: [],
      currentTeams: []
    }
    this.setTeam = this.setTeam.bind(this)

  }

  componentDidMount() {
    getTeams().then((data) =>
      this.setState({ allActiveTeams: data })
    )
  }

  setTeam(homeTeam, awayTeam) {
    const currentTeams = [homeTeam, awayTeam]
    this.setState({ ...this.state, currentTeams: currentTeams })
  }

  render() {
    return (
      <div className="App">
        <Teams
          allActiveTeams={this.state.allActiveTeams}
          setTeam={this.setTeam}
        />
        {this.state.currentTeams[0] && <HomeTeam
          homeTeam={this.state.currentTeams[0]}
          allActiveTeams={this.state.allActiveTeams}
        />}
        {this.state.currentTeams[1] && <AwayTeam
          awayTeam={this.state.currentTeams[1]}
          allActiveTeams={this.state.allActiveTeams}
        />}
        {this.state.currentTeams.length === 2 && <Players /> }
      </div>
    )
  }
}
export default App
