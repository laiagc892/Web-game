/* 
- Funció setTimeOut() que crida la Funció recursiva (del moviment) en x temps (molt petit, perquè es vegi moviment fluid).
- Funció recursiva que si no es clica pausa, crida el setTimeOut() perquè segueixi movent-se (cridant la funció).
*/

setTimeout(bgMovement, 10);

var landscape = document.querySelector("#landscape");
var position = 0;
var pauseButton = document.querySelector("#pause");
var pause = false;
var gameTime = 0;
var gameEnd = false;

pauseButton.addEventListener("click", () => {
    if (pause) {
        pause = false;
        pauseButton.innerHTML = "Pause";
        bgMovement();
    } else {
        pause = true;
        pauseButton.innerHTML = "Play";
    };
})

window.addEventListener("blur", () => {
    pause = true;
    pauseButton.innerHTML = "Play";
});

function bgMovement() {
    // Cada 8s, cadascun dels bg de 960px ha de passar per la pantalla del joc de (960px).
    // 960px / 8000ms = 0.12px/ms
    // 960px / 8000ms * 10ms (del setTimeOut) = 1.2px/10ms
    gameTime += 10;
    console.log((gameTime/1000).toFixed(0));
    let n = 2;
    position += -1.2;
    landscape.style.transform = `translateX(${position}px)`;

     if (gameTime == 16000) {
        landscape.style.transform = `translateX(0px)`;
        position = 0;
        alert("event1");
        landscape.style.backgroundColor = "grey"
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')"
  
     }
    if (gameTime == 32000) {
        landscape.style.transform = `translateX(0px)`;
        position = 0;
        alert("event2");
        landscape.style.backgroundColor = "gray"
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')"
        
    }
    if (gameTime == 48000) {
        landscape.style.transform = `translateX(0px)`;
        position = 0;
        alert("event3");
        landscape.style.backgroundColor = "lightgrey"
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')"
        
    }
    if (gameTime == 64000) {
        landscape.style.transform = `translateX(0px)`;
        position = 0;
        alert("event4");
        landscape.style.backgroundColor = "white"
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')"
        gameEnd = true
        
    }

    if (!pause && !gameEnd) {
        setTimeout(bgMovement, 10);
    }
}