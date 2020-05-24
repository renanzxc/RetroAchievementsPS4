function generateGamesHtml(games){
  let gamesHtml = ''
  games.forEach(game => {
    gamesHtml += `<a href="game-achievements.html?id=${game.id}" class="game-card"> 
      <img class="game-img" src="${game.cover}" >
      <div class="game-info">
        <h2>${game.title}</h2>
        <span class="plataform">${game.plataform}</span>
      </div>
      <div class="achievements-info">
        <div class="achievements-percent">
          <p>${game.achievements_percent} %</p>
          <div class="meter">
            <span style="width: ${game.achievements_percent}%"></span>
          </div>
        </div>
        <span class="achievements-count">
          <img src="assets/trophie.png">${game.number_achievements}
        </span>
      </div>
    </a> `
  })
  return gamesHtml
}

function generateGameHtml(game){
  let gameInfoHtml = ''
  let achievementsHtml = ''
  gameInfoHtml += `
  <div class="game-card top"> 
    <img class="game-img" src="${game.cover}" >
    <div class="game-info">
      <h2>${game.title}</h2>
      <span class="plataform">${game.plataform}</span>
    </div>
  </div> 
  `
  game.achievements.forEach(achievement => {
    achievementsHtml += `
    <a class="game-card"> 
      <img class="achievement-img" src="${achievement.cover}" >
      <div class="game-info">
        <h2>${achievement.title}</h2>
        <p>${achievement.description}</p>
      </div>
      <div class="achievements-info">
        <div class="achievements-percent conquested-players-info">
          <p>${achievement.percent_players} %</p>
          <p>${achievement.number_players} of ${achievement.of_players} players</p>
        </div>
        <span class="conquested-date">
          <p>${achievement.unlocked_on_data}</p>
          <p>${achievement.unlocked_on_time}</p>
        </span>
      </div>
    </a>
    `
  })
  return {gameInfoHtml, achievementsHtml}
}