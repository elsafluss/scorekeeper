import React, { Component } from "react"

class Teams extends Component {
  constructor() {
    super()
    this.state = {
        homeTeam: '',
        awayTeam: ''
    }
    this.sendTeamsUp = this.sendTeamsUp.bind(this)
  }

  chooseTeam(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  sendTeamsUp(event) {
    event.preventDefault()
    this.props.setTeam(this.state.homeTeam, this.state.awayTeam)
  }


  render() {
    const opts = this.props.allActiveTeams.map((team, i) => {
      return (
        <option key={i} value={team.Key} >
          {team.City} {team.Name}
        </option>
      )
    })

    return (
      <form onSubmit={this.sendTeamsUp}>
        <p>Choose the home team</p>
        <select name="homeTeam" onChange={(event) => this.chooseTeam(event)}>
          {opts}
        </select>

        <p>Choose the away team</p>
        <select name="awayTeam" onChange={(event) => this.chooseTeam(event)}>
          {opts}
        </select>
        <br></br>
        <br></br>
        <button type="submit">Set Teams</button>
      </form>
    )
  }
}

export default Teams
