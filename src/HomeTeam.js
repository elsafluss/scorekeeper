import React, { Component } from "react"

class HomeTeam extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
      console.log(this.props.allActiveTeams);
    const teamDetails = this.props.allActiveTeams.filter(
      (team) => team.Key === this.props.homeTeam
    )
    console.log('teamdetails', teamDetails);
    return (
      <>
        <p>Home Team is {teamDetails[0].Name}</p>
        <img src={teamDetails[0].WikipediaLogoUrl} alt="team logo"></img>
      </>
    )
  }
}

export default HomeTeam
