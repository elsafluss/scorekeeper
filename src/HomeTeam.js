import React, { Component } from "react"

class HomeTeam extends Component {
  constructor() {
    super()
    this.state = {}
  }


  // filter through this.props.allActiveTeams to find the 
  // team.Key that matches this.props.homeTeam
  // and show their WikipediaLogoUrl in an img tag
  render() {
    return <p>Home Team is {this.props.homeTeam}</p>
  }
}

export default HomeTeam
