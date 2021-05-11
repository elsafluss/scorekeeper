export function getTeams() {
  return fetch(
    "https://fly.sportsdata.io/v3/mlb/scores/json/teams?key=b37a9e7224fa4a63900203ee59666bc2"
  ).then((response) => {
    if (response.status >= 400 && 500 >= response.status) {
      throw new Error("User Error")
    } else if (response.status >= 500) {
      throw new Error("Server Error")
    } else {
      return response.json()
    }
  })
}

export function getHomePlayers(team) {
  return fetch(
    `https://fly.sportsdata.io/v3/mlb/scores/json/Players/${team}?key=b37a9e7224fa4a63900203ee59666bc2`
  ).then((response) => {
    if (response.status >= 400 && 500 >= response.status) {
      throw new Error("User Error")
    } else if (response.status >= 500) {
      throw new Error("Server Error")
    } else {
      return response.json()
    }
  })
}

export function getAwayPlayers(team) {
  return fetch(
    `https://fly.sportsdata.io/v3/mlb/scores/json/Players/${team}?key=b37a9e7224fa4a63900203ee59666bc2`
  ).then((response) => {
    if (response.status >= 400 && 500 >= response.status) {
      throw new Error("User Error")
    } else if (response.status >= 500) {
      throw new Error("Server Error")
    } else {
      return response.json()
    }
  })
}