const imagens = document.getElementById("carrossel")
const img = document.querySelectorAll("#carrossel img")

let indexC = 0

function carrossel() {
    indexC++;

    if(indexC > img.length - 1){
        indexC = 0
    }

    imagens.transform = `translateX(${-indexC * 500}px)`;
}

setInterval(carrossel, 2222)