import React, { Component } from "react"
import { getTeams, getPlayers } from "./Utility"
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
      currentTeams: [],
      allPlayers: []
    }
    this.setTeam = this.setTeam.bind(this)

  }

  componentDidMount() {
    getTeams().then((data) =>
      this.setState({ allActiveTeams: data })
    )
  }

  filterPlayersByActive(players) {
    const activePlayers = players.filter((player) => player.Status === "Active")
    activePlayers.sort((a, b) => {
      if(a.LastName < b.LastName) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({ activePlayers: activePlayers })
  }

  setTeam(homeTeam, awayTeam) {
    const currentTeams = [homeTeam, awayTeam]
    this.setState({ ...this.state, currentTeams: currentTeams })
    getPlayers(homeTeam).then((data) => this.setState({ allPlayers: data }))
    getPlayers(awayTeam).then((data) => this.setState({ ...this.state, allPlayers: data }))
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
        {this.state.currentTeams.length === 2 && <Players currentPlayers={this.state.currentPlayers} /> }
      </div>
    )
  }
}
export default App
