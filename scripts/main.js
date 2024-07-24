// variables
let sequenceRandom = [];
let sequenceUser = [];


// functions
function randomNumber() {
    let number = Math.floor(Math.random() * 4) + 1;
    return number;
}

function updateSequenceCounterInPage() {
    const el = document.getElementById("sequenceCounter");
    el.textContent = sequenceRandom.length;
}

function growingSequence() {
    sequenceRandom.push(randomNumber());
}

function activeClass(a) {
    a.classList.add("active");
    setTimeout(() => {
        Array.from(document.querySelectorAll('.color-button.active')).forEach(
            (el) => el.classList.remove('active')
          );
    }, 1000);
}


function showSequence() {

    for (let i = 0; i < sequenceRandom.length; i++) {
        const element = sequenceRandom[i];
        let timer = i * 2000 + 2000;
        setTimeout(() => {
            if (element === 1) {
                const el = document.getElementById("red");
                activeClass(el);
            } else if (element === 2){
                const el = document.getElementById("yellow");
                activeClass(el);
            } else if (element === 3) {
                const el = document.getElementById("green");
                activeClass(el);
            }else {
                const el = document.getElementById("blue");
                activeClass(el);
            }
        }, timer);
    }

}

function UserActiveClass() {
    sequenceUser.push(this.value);
    console.log(sequenceUser);
    
    activeClass(this);

    // cheking if value is correct
    const pcNumber = sequenceRandom[sequenceUser.length - 1];

    if (pcNumber != this.value) {
        window.alert("Hai sbagliato\nsei arrivato a: " + sequenceRandom.length + " colori in sequenza");

        sequenceRandom = [];
        sequenceUser = [];

        sequenceRandom.push(randomNumber());
        console.log(sequenceRandom);
    }
    
    if (sequenceRandom.length === sequenceUser.length) {
        sequenceUser = [];
        growingSequence();
        console.log(sequenceRandom);
        updateSequenceCounterInPage()
        setTimeout(showSequence(), 2000);
    }

}




// creation HTML page

const container = document.getElementById ("game-wraper");

// ciclo per creare la griglia di gioco
for (let i = 1; i < 5; i++) {


    // creazione nuovo elemento
    const quadrato = document.createElement ('div')

    quadrato.value = i;

    quadrato.className = "color-button";

    if (i === 1) {
        quadrato.classList.add("red");
        quadrato.setAttribute("id", "red");
    } else if (i === 2) {
        quadrato.classList.add("yellow");
        quadrato.setAttribute("id", "yellow");
    } else if (i === 3) {
        quadrato.classList.add("green");
        quadrato.setAttribute("id", "green");
    } else {
        quadrato.classList.add("blue");
        quadrato.setAttribute("id", "blue");
    }

    // aggiunta evento
    quadrato.onclick = UserActiveClass;


    //aggiunta nuovo elemento al contenitore
    container.append(quadrato);


}




// random sequence
sequenceRandom.push(randomNumber());
console.log(sequenceRandom);
showSequence();
updateSequenceCounterInPage();