import { Component } from "react"
// import { getPlayers } from "./Utility"

class Players extends Component {
  constructor() {
    super()
    this.state = {
      homePlayers: [],
      awayTeam: [],
    }
  }

  render() {
    console.log('home', this.props.currentHomePlayers)
    console.log('away', this.props.currentAwayPlayers)
    return (
      <div>
        <p>choose starting players</p>
      </div>
    )
  }
}
export default Players
