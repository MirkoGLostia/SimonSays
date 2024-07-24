// variables
let sequenceRandom = [];
let sequenceUser = [];


// functions
function activeClass() {
    sequenceUser.push(this.value);
    console.log(sequenceUser);

    this.classList.add("active");
    setTimeout(() => {
        Array.from(document.querySelectorAll('.color-button.active')).forEach(
            (el) => el.classList.remove('active')
          );
    }, 1000);

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
    } else if (i === 2) {
        quadrato.classList.add("yellow");
    } else if (i === 3) {
        quadrato.classList.add("green");
    } else {
        quadrato.classList.add("blue");
    }

    // aggiunta evento
    quadrato.onclick = activeClass;


    //aggiunta nuovo elemento al contenitore
    container.append(quadrato);


}