// start of functions for event four upgrade

function eventFour() {
    inEvent = true;
    pauseButton.disabled = "true";
    document.querySelector("#event4").style.visibility = "visible";
    let checkButton = document.querySelector("#event4-check");
    let gameEnd = document.querySelector("#event4-finish");
    let currentEnergy =  document.querySelector(".current-energy > .image-container")

    checkButton.addEventListener("click", () => {
        let wrong = document.querySelector("#event4-wrong");
        wrong.style.visibility = "visible";
        if (currentEnergy.children.length> 0) {
            let energyImage = currentEnergy.querySelector("img");
            if (energyImage.id == "event4-electric") {
                let car = document.querySelector("#event4-car");
                let wheelFront = car.querySelector("#event4-car-wheel-front");
                let wheelBack = car.querySelector("#event4-car-wheel-back");
                wrong.src = "./img/eventFour/check.svg";
                car.style.transform = "translateX(600px)";
                wheelFront.style.transform = "rotate(500deg)";
                wheelBack.style.transform = "rotate(500deg)";
            }
        }
    })
    
    gameEnd.addEventListener("click", () => {
        document.querySelector("#event4").style.visibility = "hidden";
        feedbackForm();
    });
}


// end of functions for event four upgrade