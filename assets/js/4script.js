// EJERCICIO 4

const div1=document.querySelector('#div1');
const div2=document.querySelector('#div2');
const div3=document.querySelector('#div3');
const div4=document.querySelector('#div4');

// Guardo colores en variables
const colorA="pink";
const colorS="orange";
const colorD="cyan";

// Creo una variable global para guardar la tecla elegida por el usuario

var color;

const colorNegro = document.querySelectorAll('.color-div');
    colorNegro.forEach(div => {
      div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
      });
    });

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color=colorA;
    } else if (event.key === 's' || event.key === 'S') {
        color=colorS;
    } else if (event.key === 'd' || event.key === 'D'){
        color=colorD;
    }
})

function colorDiv(div){
    div.style.backgroundColor=color;
}

div1.addEventListener("click", function (){
    colorDiv(div1);
});

div2.addEventListener("click", function (){
    colorDiv(div2);
});
div3.addEventListener("click", function (){
    colorDiv(div3);
});
div4.addEventListener("click", function (){
    colorDiv(div4);
});