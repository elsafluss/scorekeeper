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
    console.log(this.props.currentPlayers)
    return (
      <div>
        <p>choose starting players</p>
      </div>
    )
  }
}
export default Players
