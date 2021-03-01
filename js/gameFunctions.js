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

// eventFour();

function landscapeMovement() {
    // Cada 8s, cadascun dels bg de 960px ha de passar per la pantalla del joc de (960px).
    // 960px / 8000ms = 0.12px/ms
    // 960px / 8000ms * 10ms (del setTimeOut) = 1.2px/10ms
    gameTime += 10;
    // console.log((gameTime/1000).toFixed(0));
    
    position += -1.2;
    landscape.style.transform = `translateX(${position}px)`;
    
    if (gameTime == 16000) {
        position = 0;
        console.log(position);
        alert("event2");
        landscape.style.backgroundColor = "grey";
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')";
    }
    if (gameTime == 32000) {
        position = 0;
        pause = true;
        eventThree();
        landscape.style.backgroundColor = "lightgrey";
        landscape.style.backgroundImage = "url('./img/bg_test/testbg-first.png')";
    }
    if (gameTime == 48000) {
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
    rotation += 5;
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

// Functions for Event One Drag and drop

function allowDrop(ev) {
    if (ev.target.className != "image")ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ;
  }
function eventOne() {

    document.querySelector("#event1").style.visibility = "visible"
    let checkButton = document.querySelector("#event1-check");
    let message = document.querySelector("#event1-message");
    let resetButton = document.querySelector("#event1-reset");
    let advanceButton = document.querySelector("#event1-advance");
    checkButton.addEventListener("click", () => {
        checkButton.style.display = "none";
      let endPosition = document.querySelectorAll(".end-position");
      let answer = false

      for (let i = 0; i < endPosition.length; i++) {
        if (endPosition[i].firstChild) {
          if (endPosition[i].getAttribute("name") != endPosition[i].firstChild.name) {
            answer = false;
            break
          } else answer = true
        } else {
          answer = false;
          break;
        }     
      }
      
      if (answer) {
        message.innerHTML = "CORRECTO!"
        message.style.backgroundColor = "green";
        advanceButton.style.display = "inline-block"
      } 
      else {
        message.innerHTML = `INCORRECTO presiona reset e intenta de nuevo!`
        message.style.backgroundColor = "red";
        resetButton.style.display = "inline-block"
      }

      
      message.style.display = "flex"

    })
      
      resetButton.addEventListener("click", () => {
        message.style.display = "none";
        resetButton.style.display = "none";
        checkButton.style.display = "inline-block";
        let imgOne =  document.querySelector("#diesel");
        let originOne = document.querySelector("#start-one");
        let imgTwo =  document.querySelector("#gasoline");
        let originTwo = document.querySelector("#start-two");
        let imgThree =  document.querySelector("#electric");
        let originThree = document.querySelector("#start-three");
        let imgFour =  document.querySelector("#gas");
        let originFour = document.querySelector("#start-four");
        originOne.appendChild(imgOne);
        originTwo.appendChild(imgTwo);
        originThree.appendChild(imgThree);
        originFour.appendChild(imgFour);
      })

      advanceButton.addEventListener("click", () => {
        document.querySelector("#event1").style.visibility = "hidden"
        setTimeout(landscapeMovement, 10);

      })
      
     
    
}

// end of functions for event One drag and drop


// Functions for event three jump
function eventThree() {
  document.querySelector("#event3").style.visibility = "visible"
  var jumpPercent = 0;
  var pressed = false
  var barLock = false;
  function moveBar() {
    let progressBar = document.getElementById("bar");
    if (jumpPercent == 100) {
      jumpPercent = 0;
      progressBar.style.width = jumpPercent + "%";
      progressBar.style.backgroundColor = "red";
    } else if (!barLock) {
      jumpPercent += 1;
      progressBar.style.width = jumpPercent + "%";
      if (jumpPercent > 30 ) progressBar.style.backgroundColor = "yellow";
      if (jumpPercent > 70 )progressBar.style.backgroundColor = "green";
    }  
    if (pressed) setTimeout(moveBar, 10); 
  }

  window.window.addEventListener("keydown", event => {
    if (event.keyCode === 32 && !pressed && !barLock) {
      pressed = true;
      moveBar()
      
    } 
  })

  let message = document.querySelector("#event3-message");
  let resetButton = document.querySelector("#event3-reset");
  let advanceButton = document.querySelector("#event3-advance");

  window.window.addEventListener("keyup", event => {
    if (event.keyCode === 32 && !barLock) { 
      pressed = false;
      barLock = true;
      console.log(jumpPercent);
      if (jumpPercent < 31) {
        event3AnimationOne();
        setTimeout(() => {
          message.innerHTML = "¡Hay que acelerar mas! Intenta de nuevo";
          message.style.backgroundColor = "red";
          message.style.display = "inline-block";
          resetButton.style.display = "inline-block";
        }, 2500)
      } 
      else if (jumpPercent < 71) {
        event3AnimationTwo();
        setTimeout(() => {
          message.innerHTML = "¡Falto un poco mas! Intenta de nuevo";
          message.style.backgroundColor = "yellow";
          message.style.display = "inline-block";
          resetButton.style.display = "inline-block";
        }, 2500)
      }
      else {
        setTimeout(() => {
          message.innerHTML = "¡Lo lograste!";
          message.style.backgroundColor = "green";
          message.style.display = "inline-block";
          advanceButton.style.display = "inline-block";
        }, 2500)
        event3AnimationThree();
      }
    }
  })

  advanceButton.addEventListener("click", () => {
    document.querySelector("#event3").style.visibility = "hidden"
    pause = false;
    setTimeout(landscapeMovement, 10);

  })

  resetButton.addEventListener("click", () => {
    message.style.display = "none";
    resetButton.style.display = "none";
    let body = document.querySelector("#event3-car-body");
    let wheelFront = document.querySelector("#event3-car-wheel-front");
    let wheelBack = document.querySelector("#event3-car-wheel-back");
    let car = document.querySelector("#event3-car");
    body.style.transition = "0s";
    wheelFront.style.transition = "0s";
    wheelBack.style.transition = "0s";
    car.style.transition = "0s";
    body.style.transform = "";
    wheelFront.style.transform = "";
    wheelBack.style.transform = "";
    car.style.transform = "";
    barLock = false;
    document.getElementById("bar").style.width = "0%";
    document.getElementById("bar").style.backgroundColor = "red";
    jumpPercent = 0;


  })

  function event3AnimationOne() {
    let body = document.querySelector("#event3-car-body");
    let wheelFront = document.querySelector("#event3-car-wheel-front");
    let wheelBack = document.querySelector("#event3-car-wheel-back");
    let advancePx = 70;
    let rotationDeg = 400;

    body.style.transition = "2s ease-in-out";
    wheelFront.style.transition = "2s ease-in-out";
    wheelBack.style.transition = "2s ease-in-out";

    body.style.transform = `translateX(${advancePx}px)`;
    wheelFront.style.transform =  `translateX(${advancePx}px) rotate(${rotationDeg}deg)`;
    wheelBack.style.transform = `translateX(${advancePx}px) rotate(${rotationDeg}deg)`;
  }

  function event3AnimationTwo() {
    let wheelFront = document.querySelector("#event3-car-wheel-front");
    let wheelBack = document.querySelector("#event3-car-wheel-back");
    let car = document.querySelector("#event3-car");
    let rotationDegOne = 360;
    let rotationDegTwo = 650;
    let rotationDegThree = 1080;
    
    car.style.transition = `1s linear`;
    wheelFront.style.transition = `1s linear`;
    wheelBack.style.transition = `1s linear`;

    car.style.transform = `translateX(260px)`;
    wheelFront.style.transform =  `rotate(${rotationDegOne}deg)`;
    wheelBack.style.transform = `rotate(${rotationDegOne}deg)`;

    setTimeout( () => {
      car.style.transition = "0.4s linear"
      car.style.transform = `translate(310px, 30px) rotate(50deg)`
      wheelFront.style.transform =  `rotate(${rotationDegTwo}deg)`;
      wheelBack.style.transform = `rotate(${rotationDegTwo}deg)`;
    }, 1000)

    setTimeout( () => {
      car.style.transition = "1s linear"
      car.style.transform = " translate(400px, 300px) rotate(75deg) "
      wheelFront.style.transform =  `rotate(${rotationDegThree}deg)`;
      wheelBack.style.transform = `rotate(${rotationDegThree}deg)`;
    }, 1400)

  }

  function event3AnimationThree() {
    let wheelFront = document.querySelector("#event3-car-wheel-front");
    let wheelBack = document.querySelector("#event3-car-wheel-back");
    let car = document.querySelector("#event3-car");
    let rotationDegOne = 360;
    

    car.style.transition = `1s linear`;
    wheelFront.style.transition = `1s linear`;
    wheelBack.style.transition = `1s linear`;

    car.style.transform = `translateX(180px)`;
    wheelFront.style.transform =  `rotate(${rotationDegOne}deg)`;
    wheelBack.style.transform = `rotate(${rotationDegOne}deg)`;

    setTimeout( () => {
      car.style.transform = `translate(320px, -50px) rotate(-10deg) `;
      wheelFront.style.transform =  `rotate(${rotationDegOne*2}deg)`;
      wheelBack.style.transform = `rotate(${rotationDegOne*2}deg)`;
    }, 1000)

    setTimeout( () => {
      car.style.transform = `translate(580px, -20px) rotate(2deg) `;
      wheelFront.style.transform =  `rotate(${rotationDegOne*3}deg)`;
      wheelBack.style.transform = `rotate(${rotationDegOne*3}deg)`;
    }, 2000)

    setTimeout( () => {
      car.style.transform = `translate(880px, -20px) rotate(2deg) `;
      wheelFront.style.transform =  `rotate(${rotationDegOne*4}deg)`;
      wheelBack.style.transform = `rotate(${rotationDegOne*4}deg)`;
    }, 3000)


  }
}
// end of functions for event three jump

// start of functions for event four upgrade
function eventFour() {
  document.querySelector("#event4").style.visibility = "visible"
}
// end of functions for event four upgrade