//Escribe un programa que solicite al usuario ingresar un número del 1 al 7 que represente un día de la semana (1 para lunes, 2 para martes, etc.). Luego, utiliza una declaración switch para mostrar el nombre completo del día de la semana correspondiente.

/*let diaSemana = prompt("Ingrese un numerdel 1 al 7");


while(parseInt(diaSemana) <= 0 || parseInt(diaSemana) > 7){
    alert ("Error: Solo se permite un numero del 1 al 7")
    diaSemana = prompt("Ingrese un numerdel 1 al 7");
}

switch (parseInt(diaSemana)) {
    case 1:
        alert("Lunes")
        break;
    case 2:
        alert("Martes")
        break;
    case 3:
        alert("Miercoles")
        break;
    case 4:
        alert("Jueves")
        break;
    case 5:
        alert("Viernes")
        break;
    case 6:
        alert("Sabado")
        break;
    case 7:
        alert("Domingo")
        break;
} */

//Escribe un programa que solicite al usuario ingresar una temperatura en grados Celsius. Luego, convierte esa temperatura a grados Fahrenheit y muestra el resultado en pantalla. La fórmula para convertir de grados Celsius a grados Fahrenheit es: F = C * (9/5) + 32.

/*let gradoCelsius = parseInt(prompt("Ingrese su grado celsius"));

let gradoFahrenheit = gradoCelsius * (9/5) + 32;
console.log(gradoCelsius.toFixed(1)); */

//Escribe un programa que solicite al usuario ingresar un número del 1 al 12 que represente un mes del año. Luego, muestra en pantalla la cantidad de días que tiene ese mes. Considera que no es necesario tener en cuenta los años bisiestos en este caso. Puedes asumir que el usuario ingresará un número válido del 1 al 12.

/*let numberMonth = prompt("Ingrese un numero del 1 al 12 para representar un mes del año");

while(isNaN(numberMonth) || parseInt(numberMonth) <= 0 || parseInt(numberMonth) > 12){
    alert('Error, ingrese un numero del 1 al 12');
    numberMonth = parseInt(prompt("Ingrese un numero del 1 al 12 para representar un mes del año"));
}

switch (parseInt(numberMonth)) {
    case 1:
        alert("El mes de enero tiene 31 dias.")
        break;
    case 2:
        alert("El mes de febrero tiene 28 dias (no inclueye el año bisiesto.)")
        break;
    case 3:
        alert("El mes de marzo tiene 31 dias.")
        break;
    case 4:
        alert("El mes de abril tiene 30 dias.")
        break;
    case 5:
        alert("El mes de mayo tiene 31 dias.")
        break;
    case 6:
        alert("El mes de junio tiene 30 dias.")
        break;
    case 7:
        alert("El mes de julio tiene 31 dias.")
        break;
    case 8:
        alert("El mes de agosto tiene 31 dias.")
        break;
    case 9:
        alert("El mes de septiembre tiene 30 dias.")
        break;
    case 10:
        alert("El mes de octubre tiene 31 dias.")
        break;
    case 11:
        alert("El mes de noviembre tiene 30 dias.")
        break;
    case 12:
        alert("El mes de diciembre tiene 31 dias.")
        break;
}; */

//Realizar un programa que ayude a calcular el total a pagar de acuerdo a la 
//distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
//tomando en consideración lo siguiente: 
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 
//0.10 y si es “autobús” 0.5. 
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es 
//mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
//Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros 
//consumidos

let vehiculo = prompt("ingrese su vehiculo: coche, moto, autobus.");
let precioKm = 0;
let total = 0;

while(vehiculo.toLowerCase() !== "coche" && vehiculo.toLowerCase() !== "moto" && vehiculo.toLowerCase() !== "autobus"){
    alert("Error: Vehiculo desconocido. Ingrese: coche, moto o autobus")
    vehiculo = prompt("ingrese su vehiculo: coche, moto, autobus.");
}

switch (vehiculo.toLowerCase()) {
    case "coche":
        precioKm = 0.20
        break;
    case "moto":
        precioKm = 0.10
        break;
    case "autobus":
        precioKm = 0.5
    break;
}

let kmRecorridos = parseFloat(prompt("Ingres los kl recorridos"));
let ltConsumidos = prompt("Ingrese los litros consumidos");

if(ltConsumidos >= 0 && ltConsumidos <= 100){
    total = precioKm * kmRecorridos + 5
    alert (`Su total a pagar es de ${total.toFixed(2)}$`)
}else if(ltConsumidos > 100){
    total = precioKm * kmRecorridos + 10
    alert (`Su total a pagar es de ${total.toFixed(2)}$`)
}