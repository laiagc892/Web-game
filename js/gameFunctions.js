/* 
- Funció setTimeOut() que crida la Funció recursiva (del moviment) en x temps (molt petit, perquè es vegi moviment fluid).
- Funció recursiva que si no es clica pausa, crida el setTimeOut() perquè segueixi movent-se (cridant la funció).
*/

setTimeout(bgMovement, 10);

var bgFirst = document.querySelector("#bg-first");
var bgSecond = document.querySelector("#bg-second");
var positionFirst = 0;
var positionSecond = 0;
var pauseButton = document.querySelector("#pause");
var pause = false;
var gameTime = 0;

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

window.addEventListener("blur", () => pause = true);

function bgMovement() {
    // Cada 8s, cadascun dels bg de 960px ha de passar per la pantalla del joc de (960px).
    // 960px / 8000ms = 0.12px/ms
    // 960px / 8000ms * 10ms (del setTimeOut) = 1.2px/10ms
    gameTime += 10;
    console.log((gameTime/1000).toFixed(0));

    positionFirst += -1.2;
    positionSecond += -1.2;
    bgFirst.style.transform = `translateX(${positionFirst}px)`;
    bgSecond.style.transform = `translateX(${positionSecond}px)`;
    
    if (Math.round(positionFirst) == -960) {
        positionFirst = 960;
    }
    if (Math.round(positionSecond) == -1920) {
        positionSecond = 0;
    }

    if (!pause) {
        setTimeout(bgMovement, 10);
    }
}