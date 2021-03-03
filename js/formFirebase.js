function feedbackForm() {
    document.querySelector("#feedback").style.visibility = "visible";
}

var sendButton = document.querySelector("#send");

const database = "https://ecolucio-joc-default-rtdb.firebaseio.com/";

//* POST ------------------------------------------------------------ ------------------------------------------------------------

// sendButton.addEventListener("click", () => {                                        // POST & GET Click
//     var answer1 = document.querySelector("input[name=question1]:checked");
//     var answer2 = document.querySelector("input[name=question2]:checked");
//     var answer3 = document.querySelector("input[name=question3]:checked");
//     var answer4 = document.querySelector("#a4");

//     if(!answer1 || !answer2 || !answer3) {
//         errorMessage.innerHTML = "Et falta escollir alguna resposta.";
//         return console.log("L'usuari no ha escollit alguna resposta!")              // Si algun camp està buit, no s'envia res i surt de la funció
//     }

//     postA(answer1.value, answer2.value, answer3.value, answer4.value);

//     answer1.checked = false;                                                        // Buida el formulari
//     answer2.checked = false;
//     answer3.checked = false;
//     answer4.value = "";

//     getA();
// });

function postA(a1, a2, a3, a4) {                                                    // POST Funció. Posteja el missatge
    fetch(database + "form-answers.json", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({  q1: `${a1}`,
        q2: `${a2}`,
        q3: `${a3}`,
        q4: `${a4}`,
        date: Date.now()
    })
})
.then(res => res.json())
.then(res => console.log(res));
}


//* GET ------------------------------------------------------------ ------------------------------------------------------------

function getA() {                                                                   // GET Funció. Carrega tots els resultats actuals
    fetch(database + "form-answers.json")
    .then(res => res.json())
    .then(res => {
        var results = res;
        
        // TODO Buidar els results abans de reescriure'ls:
        resultsShowed.innerHTML = "";                                               // Buida el contingut abans de reescriure'l, perquè no escrigui més d'una vegada el mateix
        for (idR in results) {
            // TODO Gestionar com es visualitzen els results:
            
            if (results[idR].q1 == "si") {
                feedback.q1.answers[0] ++
            } else if (results[idR].q1 == "no") {
                feedback.q1.answers[1] ++
            } else feedback.q1.answers[2] ++
            
            if (results[idR].q2 == "always") {
                feedback.q2.answers[0] ++
            } else if (results[idR].q2 == "sometimes") {
                feedback.q2.answers[1] ++
            } else feedback.q2.answers[2] ++
            
            if (results[idR].q3 == "already") {
                feedback.q3.answers[0] ++
            } else if (results[idR].q3 == "often") {
                feedback.q3.answers[1] ++
            } else feedback.q3.answers[2] ++
            
            if (results[idR].q4) {
                feedback.q4.comments.push(results[idR].q4)
            }
        }
        console.log(feedback.q1.answers, feedback.q2.answers, feedback.q3.answers, feedback.q4.comments);
        

    });
}


var feedback = new Vue({
    el: "#feedback",
    data: {
        q1: {
            question: "1) És necessària una evolució en els combustibles dels transports cap a una energia més ecològica per reduïr la contaminació?",
            answers: [0, 0, 0]
        },
        q2: {
            question: "2) Et mous amb un transport eco, de baixa contaminació o públic?",
            answers: [0, 0, 0]
        },
        q3: {
            question: "3) Has pensat en millorar la teva movilitat amb un transport menys contaminant?",
            answers: [0, 0, 0]
        },
        q4: {
            question: "4) Vols afegir algun comentari sobre aquest tema?",
            comments: []
        },
    },
    methods: {
        boto: () => {                                        // POST & GET Click
            var answer1 = document.querySelector("input[name=question1]:checked");
            var answer2 = document.querySelector("input[name=question2]:checked");
            var answer3 = document.querySelector("input[name=question3]:checked");
            var answer4 = document.querySelector("#a4");
            var errorMessage = document.querySelector("#error");
            var resultsShowed = document.querySelector("#results");
            
            if(!answer1 || !answer2 || !answer3) {
                console.log(errorMessage)
                errorMessage.style.visibility = "visible";
                return console.log("L'usuari no ha escollit alguna resposta!")              // Si algun camp està buit, no s'envia res i surt de la funció
            }
            
            postA(answer1.value, answer2.value, answer3.value, answer4.value);
            
            answer1.checked = false;                                                        // Buida el formulari
            answer2.checked = false;
            answer3.checked = false;
            answer4.value = "";
            
            document.querySelector("#feedback").style.visibility = "hidden";
            resultsShowed.style.visibility = "visible";
            
            getA();
        }
    }
})