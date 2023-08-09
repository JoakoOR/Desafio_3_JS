// Codigo ejercicio

// function pintar() {
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


// Ejercicio 3
elemento = document.querySelector('#ejercicio');

function colorFuente() {
    elemento.style.color = color;
}

function colorFuente2(color = "green") {
    elemento.style.color = color;
}

colorFuente2();

// Click para cambiar el color a amarillo

elemento.addEventListener("click", () => {
    colorFuente2('yellow');
})

