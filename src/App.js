import React, { Component } from "react"
import { getTeams } from "./Utility"
import Teams from "./Teams"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeTeams: [],
    }
  }

  componentDidMount() {
    getTeams().then((data) =>
      this.setState({ activeTeams: data })
    )
  }

  render() {
    return (
      <div className="App">
        <Teams activeTeams={this.state.activeTeams} />
      </div>
    )
  }
}
export default App
