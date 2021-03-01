/* 
- Funció setTimeOut() que crida la Funció recursiva (del moviment) en x temps (molt petit, perquè es vegi moviment fluid).
- Funció recursiva que si no es clica pausa, crida el setTimeOut() perquè segueixi movent-se (cridant la funció).
*/

// Landscape movement:
var landscape = document.querySelector("#landscape");
var position = 0;
// Game timing:
var pauseButton = document.querySelector("#pause");
var pause = false;
var gameTime = 0;
var gameEnd = false;
// Car movement:
var carBody = document.querySelector("#car-body");
var carWheelFront = document.querySelector("#car-wheel-front");
var carWheelBack = document.querySelector("#car-wheel-back");
var rotation = 0;
var bounce = 0;

pauseButton.addEventListener("click", () => {
    if (pause) {
        pause = false;
        pauseButton.innerHTML = "Pause";
        landscapeMovement();
    } else {
        pause = true;
        pauseButton.innerHTML = "Play";
    };
})

window.addEventListener("blur", () => {
    pause = true;
    pauseButton.innerHTML = "Play";
});


eventFour();

function landscapeMovement() {
    // Cada 8s, cadascun dels bg de 960px ha de passar per la pantalla del joc de (960px).
    // 960px / 8000ms = 0.12px/ms
    // 960px / 8000ms * 10ms (del setTimeOut) = 1.2px/10ms
    gameTime += 10;
    // console.log((gameTime/1000).toFixed(0));
    
    position += -2.4;
    landscape.style.transform = `translateX(${position}px)`;
    
    if (gameTime == 8000) {
        position = 0;
        pause = true;
        eventThree();
        landscape.style.backgroundColor = "lightgrey";
    }
    if (gameTime == 16000) {
        position = 0;
        pause = true;
        eventFour();
        landscape.style.backgroundColor = "white";
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')";
    }
    
    if (!pause && !gameEnd) {
        setTimeout(landscapeMovement, 10);
        setTimeout(carMovement, 10);
    }
}

var growing = true;

function carMovement() {
    rotation += 8;
    carWheelFront.style.transform = `rotate(${rotation}deg)`;
    carWheelBack.style.transform = `rotate(${rotation}deg)`;
    if (rotation == 360) {
        rotation = 0;
    }
    
    if (Math.round(bounce) == 0) {
        growing = true;
    } else if (Math.round(bounce) == 4) {
        growing = false;
    }
    
    if (growing) {
        bounce += 0.15;
    }else bounce += -0.15;
    carBody.style.transform = `translateY(${bounce}px)`;
}