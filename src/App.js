import React, { Component } from "react"
import { getTeams, getHomePlayers, getAwayPlayers } from "./Utility"
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
      allPlayers: [],
      currentPlayers: [],
      activeHomePlayers: [],
      activeAwayPlayers: [],
    }
    this.setTeam = this.setTeam.bind(this)
  }

  componentDidMount() {
    getTeams().then((data) => this.setState({ allActiveTeams: data }))
  }

  filterPlayersByActive(players) {
    const activeHomePlayers = players.filter(
      (player) => player.Status === "Active"
    )
    activeHomePlayers.sort((a, b) => {
      if (a.LastName < b.LastName) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({ activeHomePlayers: activeHomePlayers })

    const activeAwayPlayers = players.filter(
      (player) => player.Status === "Active"
    )
    activeAwayPlayers.sort((a, b) => {
      if (a.LastName < b.LastName) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({ activeAwayPlayers: activeAwayPlayers })
  }

  setTeam(homeTeam, awayTeam) {
    console.log(homeTeam)
    console.log(awayTeam)
    const currentTeams = [homeTeam, awayTeam]
    this.setState({ ...this.state, currentTeams: currentTeams })
    getHomePlayers(homeTeam)
      .then((homeData) => this.filterPlayersByActive(homeData))
      .then(
        getAwayPlayers(awayTeam).then((awayData) =>
          this.filterPlayersByActive(awayData)
        )
      ) // async await needed? home/away player data is coming through
      // but they're overwriting each other at some point
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Teams
          allActiveTeams={this.state.allActiveTeams}
          setTeam={this.setTeam}
        />
        {this.state.currentTeams[0] && (
          <HomeTeam
            homeTeam={this.state.currentTeams[0]}
            allActiveTeams={this.state.allActiveTeams}
          />
        )}
        {this.state.currentTeams[1] && (
          <AwayTeam
            awayTeam={this.state.currentTeams[1]}
            allActiveTeams={this.state.allActiveTeams}
          />
        )}
        {this.state.currentTeams.length === 2 && (
          <Players
            currentHomePlayers={this.state.activeHomePlayers}
            currentAwayPlayers={this.state.activeAwayPlayers}
          />
        )}
      </div>
    )
  }
}
export default App
