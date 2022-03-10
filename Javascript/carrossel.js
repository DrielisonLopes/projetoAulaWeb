const imgs = document.getElementById("imgCarrossel")
const img = document.querySelectorAll("#imgCarrossel img")

let indexC = 0

function carrossel() {
    indexC++;

    if(indexC > img.length - 1){
        indexC = 0
    }

    imgs.style.transform = `translateX(${-indexC * 100}%)`;
}

setInterval(carrossel, 2500);