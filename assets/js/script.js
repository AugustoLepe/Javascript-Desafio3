// Código original 

// function pintar() {
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }
//
// ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);



// Modificar código para no tener que seleccionar el elemento nuevamente dentro de la función

// ele = document.querySelector("#ele1");
// ele.addEventListener("click", function () {
//     ele.style.backgroundColor = "yellow"
// });



// Modificar código para pasar color como argumento a la función pintar, por defecto green

pintar = (ele, color = "green") => ele.style.backgroundColor = color;
ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));