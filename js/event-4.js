// start of functions for event four upgrade

function eventFour() {
    pauseButton.disabled = "true";
    document.querySelector("#event4").style.visibility = "visible";
    let checkButton = document.querySelector("#event4-check");
    let gameEnd = document.querySelector("#event4-finish");
    let currentEnergy =  document.querySelector(".current-energy .image-container")

    checkButton.addEventListener("click", () => {
        if (currentEnergy.innerHTML != "") {
            let energyImage = currentEnergy.querySelector("img");
            if (energyImage.id == "event4-electric") {
                let car = document.querySelector("#event4-car");
                let wheelFront = car.querySelector("#event4-car-wheel-front");
                let wheelBack = car.querySelector("#event4-car-wheel-back");

                car.style.transform = "translateX(600px)";
                wheelFront.style.transform = "rotate(500deg)";
                wheelBack.style.transform = "rotate(500deg)";
            }
        }
    })
}
// end of functions for event four upgrade