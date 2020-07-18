function generateGamesHtml(games){
  let gamesHtml = ''


  for( let key in games){
    game = games[key]
    plataformWidth = game.plataform.length > 8 ? ((game.plataform.length - 8) * 7) + (8 * 15) : game.plataform.length  * 15
     
    gamesHtml += `<a href="game-achievements.html?id=${game.id}" class="game-card"> 
      <img class="game-img" src="http://retroachievements.org/${game.cover}" onerror="if (this.src != 'assets/error-image.png') this.src = 'assets/error-image.png';">
      <div class="game-info">
        <h2>${game.title}</h2>
        <span class="plataform" style="width: ${plataformWidth}px;">${game.plataform}</span>
      </div>
      <div class="achievements-info">
        <div class="achievements-percent">
          <p>${game.achievements_percent} %</p>
          <div class="meter">
            <span style="width: ${game.achievements_percent}%"></span>
          </div>
        </div>
        <span class="achievements-count">
          <img src="assets/trophie.png">${game.earned_achievements}
        </span>
      </div>
    </a> `
  }

  return gamesHtml
}

function generateGameHtml(game){
  let gameInfoHtml = ''
  let achievementsHtml = ''

  plataformWidth = game.plataform.length > 8 ? ((game.plataform.length - 8) * 7) + (8 * 15) : game.plataform.length  * 15

  gameInfoHtml += `
  <div class="game-card top"> 
    <img class="game-img" src="http://retroachievements.org/${game.cover}" onerror="errorImage(this)">
    <div class="game-info">
      <h2>${game.title}</h2>
      <span class="plataform" style="width: ${plataformWidth}px;" >${game.plataform}</span>
    </div>
    <div class="game-info2">
      <p>Achievements: <span>${game.earned_achievements}</span> / <span>${game.total_achievements}</span></p>
      <p>Points: <span>${game.earned_points}</span> / <span>${game.total_points}</span></p>
    </div>
  </div> 
  `
  game.achievements.forEach(achievement => {
    achievementsHtml += `
    <a class="game-card"> 
      <img class="achievement-img" src="${achievement.image}" >
      <div class="achieve-info">
        <h2>${achievement.title}</h2>
        <p>${achievement.description}</p>
      </div>
      <div class="achievements-info">
        <div class="achievements-percent conquested-players-info">
          <p>${achievement.points} points</p>
        </div>
        <span class="conquested-date">
          ${achievement.unlocked_date ? `<p>${achievement.unlocked_date}</p>` : ""}
        </span>
      </div>
    </a>
    `
  })
  return {gameInfoHtml, achievementsHtml}
}