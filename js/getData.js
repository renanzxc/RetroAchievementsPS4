async function getUserGames(username){
  document.querySelector(".container").innerHTML = '<div class="loader"></div>'

  gamesData = {}

  await fetch(`https://retroarchieveapi.herokuapp.com/user/${username}/games?achievements=true&limit=20`)
  .then(res => res.status == 200 ? res.json() : new Error("Get fail"))
  .then(json => getGamesData(json.games))
  .then(result => {
    gamesData = result
  }) 
  
  return gamesData
}

function getGamesData(gamesJson){
  let gamesHtml = generateGamesHtml(gamesJson)

  let gamesInfo = {}
  gamesJson.forEach((game) => {
    gamesInfo[game.id.toString()] = game
  }) 

  console.log(gamesInfo)

  return {gamesHtml, gamesInfo}
}