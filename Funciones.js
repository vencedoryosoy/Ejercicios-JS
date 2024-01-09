/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


function perimetroCirculo(r) {
    const pi = 3.141592
    return `El perímetro del circulo, a partír del radio indicado, es: ${2*r*pi}`;


}

function areaRectangulo(b,h) {
    return `El área del rectángulo, a partír de la base y la altura indicada, es: ${b*h}`;
}

function cuadradoNumero(x) {
    return `El cuadrado, del número antes indicado, es: ${x*x}`;
}

function conversorCelciusAFarenheit(c) {
    const r = 9/5 
    return `Los grados Celcius antes indicados, equivalen a : ${(c*r)+32} Farenheit`;
}

function calculadorVoltaje(r,i){
    return `El voltaje a partir, de la resistencia y la corriente indicada, es: ${r*i}`;
}

function calculadorVolumenEsfera(r){
    const pi = 3.141592
    const fr = 4/3
    return `El voltaje a partir, de la resistencia y la corriente indicada, es: ${pi* fr * r * r * r}`;
}
    
