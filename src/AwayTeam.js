import React, { Component } from "react"

class AwayTeam extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const teamDetails = this.props.allActiveTeams.filter(
      (team) => team.Key === this.props.awayTeam
    )

    return (
      <>
        <p>Away Team is {teamDetails[0].Name}</p>
        <img src={teamDetails[0].WikipediaLogoUrl} alt="team logo"></img>
      </>
    )
  }
}

export default AwayTeam
