// Functions for event three jump

function eventThree() {
    pauseButton.disabled = "true";
    document.querySelector("#event3").style.visibility = "visible"
    var jumpPercent = 0;
    var pressed = false
    var barLock = false;
    inEvent = true;
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
                    message.innerHTML = "Cal accelerar més! Intenta-ho de nou";
                    message.style.backgroundColor = "red";
                    message.style.display = "flex";
                    resetButton.style.display = "inline-block";
                }, 2500)
            } 
            else if (jumpPercent < 71) {
                event3AnimationTwo();
                setTimeout(() => {
                    message.innerHTML = "T'ha faltat una mica! Intenta-ho de nou";
                    message.style.backgroundColor = "yellow";
                    message.style.display = "flex";
                    resetButton.style.display = "inline-block";
                }, 2500)
            }
            else {
                setTimeout(() => {
                    message.innerHTML = "Ho has aconseguit!";
                    message.style.backgroundColor = "green";
                    message.style.display = "flex";
                    advanceButton.style.display = "inline-block";
                }, 1500)
                event3AnimationThree();
            }
        }
    })
    
    advanceButton.addEventListener("click", () => {
        document.querySelector("#event3").style.visibility = "hidden"
        pauseButton.disabled = false;
        pause = false;
        inEvent = false;
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
        
        
        car.style.transition = `0.5s linear`;
        wheelFront.style.transition = `0.5s linear`;
        wheelBack.style.transition = `0.5s linear`;
        
        car.style.transform = `translateX(180px)`;
        wheelFront.style.transform =  `rotate(${rotationDegOne}deg)`;
        wheelBack.style.transform = `rotate(${rotationDegOne}deg)`;
        
        setTimeout( () => {
            car.style.transform = `translate(320px, -50px) rotate(-10deg) `;
            wheelFront.style.transform =  `rotate(${rotationDegOne*2}deg)`;
            wheelBack.style.transform = `rotate(${rotationDegOne*2}deg)`;
        }, 500)
        
        setTimeout( () => {
            car.style.transform = `translate(580px, -20px) rotate(2deg) `;
            wheelFront.style.transform =  `rotate(${rotationDegOne*3}deg)`;
            wheelBack.style.transform = `rotate(${rotationDegOne*3}deg)`;
        }, 1000)
        
        setTimeout( () => {
            car.style.transform = `translate(880px, -20px) rotate(2deg) `;
            wheelFront.style.transform =  `rotate(${rotationDegOne*4}deg)`;
            wheelBack.style.transform = `rotate(${rotationDegOne*4}deg)`;
        }, 1500)
        
    }
}
// end of functions for event three jump