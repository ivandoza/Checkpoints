// Escriba una función que tome una matriz de cadenas como parámetro y devuelva una nueva 
// matriz que contenga solo las cadenas que tengan una longitud superior a 5 caracteres.


const strings = ["Enero", "Febrero", "Mar", "Abril", "May" ];

const mayorQueCinco = strings.filter((element) => 
    element.length > 5)

console.log(mayorQueCinco);