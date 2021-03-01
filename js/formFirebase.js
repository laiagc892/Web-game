var sendButton = document.querySelector("#send");
var errorMessage = document.querySelector("#error");
var resultsButton = document.querySelector("#get-results");
var resultsShowed = document.querySelector("#results");


const database = "https://ecolucio-joc-default-rtdb.firebaseio.com/";


//* POST ------------------------------------------------------------ ------------------------------------------------------------

sendButton.addEventListener("click", () => {                                        // POST Click
    var answer1 = document.querySelector("input[name=question1]:checked");
    var answer2 = document.querySelector("input[name=question2]:checked");
    var answer3 = document.querySelector("input[name=question3]:checked");
    var answer4 = document.querySelector("#a4");
    postA(answer1.value, answer2.value, answer3.value, answer4.value);
    answer1.checked = false;                                                        // Buida el formulari
    answer2.checked = false;
    answer3.checked = false;
    answer4.value = "";
});

function postA(a1, a2, a3, a4) {                                                    // POST Funció. Posteja el missatge
    if(!a1 || !a2 || !a3) {
        errorMessage.innerHTML = "Et falta escollir alguna resposta.";
        return console.log("L'usuari no ha escollit alguna resposta!")              // Si algun camp està buit, no s'envia res i surt de la funció
    };
    
    fetch(database + "form-answers.json", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({  q1: `${a1}`,
                                q2: `${a2}`,
                                q3: `${a3}`,
                                comment: `${a4}`,
                                date: Date.now()
        })
    })
    .then(res => res.json())
    .then(res => console.log(res));
}


//* GET ------------------------------------------------------------ ------------------------------------------------------------

resultsButton.addEventListener("click", () => getA())                                 // GET Click

function getA() {                                                               // GET Funció. Carrega tots els resultats actuals
    fetch(database + "form-answers.json")
    .then(res => res.json())
    .then(res => {
        var results = res;
        console.log(results);
        
        // TODO Buidar els results abans de reescriure'ls:
        resultsShowed.innerHTML = "";                                                 // Buida el contingut abans de reescriure'l, perquè no escrigui més d'una vegada el mateix
        for (idR in results) {
            // TODO Gestionar com es visualitzen els results:
            resultsShowed.innerHTML +=  `<li>Resposta:
                                            <p>Q1: ${results[idR].q1}</p>
                                            <p>Q2: ${results[idR].q2}</p>
                                            <p>Q3: ${results[idR].q3}</p>
                                            <p>Comment: ${results[idR].comment}</p>
                                        </li>`
        }
    });
}