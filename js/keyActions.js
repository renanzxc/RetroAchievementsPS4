function moveKeys(page) {
    var cards = document.querySelectorAll(".game-card:not(.top)")
    var selected = -1

    cards.forEach((card) => {
        card.onmouseover = () => {
            if (selected > -1 && selected < cards.length ){
                cards[selected].classList.remove("selected")
            }
        }
    })
    
    window.onkeydown = (event) => {
        if (event.keyCode == 38 && selected > 0){ //ArrowUp
            if ( selected != cards.length){
                cards[selected].classList.remove("selected")
            }
            selected--
            cards[selected].classList.add("selected")
            document.querySelector(".games").scroll(cards[selected].offsetLeft,cards[selected].offsetTop-200)
            
        } else if (event.keyCode == 40 && selected < cards.length-1){ //ArrowDown
            if ( selected != -1){
                cards[selected].classList.remove("selected")
                document.querySelector(".games").scroll(cards[selected].offsetLeft,cards[selected].offsetTop-250)

            }
            
            selected++
            cards[selected].classList.add("selected")     

        } else if (event.keyCode == 13) {
            cards[selected].click()
        } else if (selected == 0){
            cards[selected].classList.remove("selected")
            selected--
            if(page == 'game-achievements'){
                document.querySelector(".games").scroll(0,0)
            }
        } else if (selected == cards.length-1){
            cards[selected].classList.remove("selected")
            selected = cards.length
        } 
    }
}