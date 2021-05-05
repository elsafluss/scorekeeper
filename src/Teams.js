import React, { Component } from "react"

class Teams extends Component {
    constructor() {
        super()
        this.state = {}
    }

  render() {
    const opts = this.props.activeTeams.map((team) => {
      return (
          <option>
            {team.City} {team.Name}
          </option>
      )
    })

    return (
      <>
        <p>Choose the home team</p>
        <select>{opts}</select>
        <br></br>
        <br></br>
        <p>Choose the away team</p>
        <select>{opts}</select>
      </>
    )
  }
}

export default Teams
