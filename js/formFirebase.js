b1.addEventListener("click", () => {
    // Declarem la variable prnom dins la funció, ja que si ho fessim abans del "click", no agafaria el pronom que ha escollit l'usuari.
    var prnom = document.querySelector("input[name=pronom]:checked");       // Podem no posar input si amb el name ja troba l'element q volem.
    // input és l'element (etiqueta) i [name=nameOfRadio] és el seu atribut. Podem referir-nos a qualsevol dels atributs. Classes i id es redueixen a "." i "#" + el nom corresponent.
    p.innerHTML = `Una càlida salutació per ${prnom.value} ${nom.value}! `
});     // detecta el click al botó i executa la funció










const database = "https://moveco-game-default-rtdb.firebaseio.com/";


//* GET inicial ------------------------------------------------------------ ------------------------------------------------------------
getA()                                                                          // Carrega els missatges a l'iniciar la pàgina

//* POST ------------------------------------------------------------ ------------------------------------------------------------
send.addEventListener("click", () => postA(user.value, mess.value))             // POST Click

function postA(usuari, text) {                                                  // POST Funció. Posteja el missatge
    if(!usuari || !text) return console.log("Usuari o missatge no vàlid!");     // Si algun camp està buit, no s'envia res i surt de la funció
    fetch(database + "form-answers.json", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({  q1: `${a1}`,
                                q2: `${a2}`,
                                q3: `${a3}`,
                                comment: `${text}`,
                                // message: `${text}`,
        date: Date.now()
    })
})
.then(res => res.json())
.then(res => console.log(res));
// allMess.innerHTML += `<li><p class="twit-user">${usuari}</p><p>${text}</p></li>`;
// TODO Buidar el formulari:
// user.value = "";                                                            // Buidar el formulari
// mess.value = "";
}

//* GET ------------------------------------------------------------ ------------------------------------------------------------
refresh.addEventListener("click", () => getA())                                 // GET Click

function getA() {                                                               // GET Funció. Carrega tots els missatges actuals
    fetch(database + "form-answers.json")
    .then(res => res.json())
    .then(res => {
        var missatges = res;
        console.log(missatges);
        
        // TODO Buidar els resultats abans de reescriure'ls:
        allMess.innerHTML = "";                                                 // Buida el contingut abans de reescriure'l, perquè no escrigui més d'una vegada el mateix
        for (idM in missatges) {
            // TODO Gestionar com es visualitzen els resultats:
            // allMess.innerHTML += `<li data-id="${idM}"><p class="twit-user">${missatges[idM].user}</p><p>${missatges[idM].message}</p></li>`
        }
    });
}