/**
 * Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
let resistance = [-1,5,6,3]

resistance.forEach(i => console.log (Math.sqrt(i*i)))

let resistencias = [-1, 5, 6, 3];
let suma = 0;

for (i = 0 ; i < resistencias.length; i++){
    suma += resistencias[i];
}

console.log(suma)

var resistance = [-1,5,6,3]

resistance.forEach(i => console.log (Math.sqrt(i*i))


)

 */

/**
 * Display online status of a list of users
 * 
 * onlineStatus (["Usuario1", "Usuario2", "Usuario n"])
 * 
 * Expected output
 * 
 * 'Usuario1', usuario2 and n more are online
 * 
 */

//1. Obtener la cantidad total de usuarios
//2. Calcular usuarios restantes eliminando del total los primeros 2
//3. Obtener los primeros 2
// 4. Imprimir mensaje

const users = ['mocking99', 'J0eyPunch', 'glassedFer', 'anon123'];
function getLength(arr) {
    return arr.length;
}

function calcRemaining (total){
    return total -2;
}

function getUsers (arr)
const users = arr[0] + arr[1];
return users;

function onlineStatus(arr) {
    const total = getLength(arr);
    const rest = calcRemaining(total);
    const firstUsers = getUsers(arr);

    console.log(`Users: ${firstUsers}, and ${rest} are online`);
}

onlineStatus(users);

////////////////////////////////

const onlineStatus = arr => {
    if (arr.length >= 3) {
        const firstUsers = getUsers(arr);
        console.log(`Users: ${firstUsers}, and ${arr.length -2} are online`);

    } else {
        console.log(`users: ${arr.join(',')} are online`);
    }
}

onlineStatus(users);

// Write a function to determinate if an array is positively dominant...

// 1. Loop por cada elemento
// 2. Total de positivos
// 3. Cantidad total y dividir sobre 2
// 4. Comparamos e imprimir boolean

const numArr = [-1000, -1, 50, 1, 2, 5];
const negativArr = [-100, -1, -50, -1, 5, 2]

function positiveArr(arr) {
    let positiveCount = 0;
    arr.forEach(num) => 
    {
        if (num > 0) {
            positiveCount++;
                }
    }
    const mid = arr.length /2;
    return positiveCount > mid;
}

const res = positiveArr(negativeArr);
console.log(res)













