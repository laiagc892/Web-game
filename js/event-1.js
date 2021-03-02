// Functions for Event One Drag and drop

function allowDrop(ev) {
    if (ev.target.className != "event-image")ev.preventDefault();
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
    pauseButton.disabled = "true";
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
        pauseButton.disabled = false;
        setTimeout(landscapeMovement, 10);
        
    })
    
    
    
}

// end of functions for event One drag and drop