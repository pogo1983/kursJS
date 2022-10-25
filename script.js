//console log to show on html page
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();

//do not use variable type = var !!
const name = 'Pogo'
let age = '39'
const sport = 'Ice Hockey'
console.log('Hej to ja, '+name+'. Mam '+age+' i lubie '+sport+'.' )//stary zapis
console.log(`Hej to ja, ${name} i mam aktualnie ${age} lat i trenuje ${sport}` )

//to check typ of data
console.log(typeof sport)

//string methods - JS MDN string
console.log(name.length)
console.log(name.toUpperCase())

const msg = 'Pogo test msg'
console.log(msg)
const newMsg = msg.toUpperCase()
console.log(newMsg)

//locale - use local settings for country etc
const date = new Date()
console.log(date.toLocaleString('pl'))
console.log(date.toLocaleString('en'))

//duza litera dla konkretnej litery z wyrazu
const newName = 'pogus'
const fixedUserName = newName.charAt(0).toLocaleUpperCase()
console.log(newName.slice(1))
console.log(fixedUserName)
console.log(fixedUserName+newName.slice(1))

//zadanie ze stringami
const text1 = 'powieksz mnie'
console.log(text1.toUpperCase())
const text2 = 'ZAPISZ MNIE MALYMI'
console.log(text2.toLowerCase())
const text3 = 'p$%^&#$# wytnij dziwne znaki z poczatku'
console.log(text3.slice(9))
const text4 = 'sprawdz czy zawiera slowo "czy"'
console.log(text4.includes('czy'))
const text5 = 'wyLoguj w konsoli tylko litere "L", która znajduje sie w wyrazie "Wyloguj"'
console.log(text5.charAt(2))
const text6 = 'pies zamien kazde slowo pies, na slowo kot pies'
console.log(text6.replaceAll('pies','kot'))
const text7 = 'podziel, ten, string, od, przecinkow'
console.log(text7.split(','))


//NUMBERs
//oprators
//boolean

//instrukcje warunkowe
const pass = 'qwerty'
if (pass.length>10)
{
console.log('TRUE')
}
else
{
    console.log('FALSE')
}


//if w ifie
const color = 'blue1'

if (color == 'blue'){
    if (10 > 0){
        console.log('true true')
    }
    else {
        console.log('stop')
    }
}else{
    console.log('false')
}

//else if 

const pass2 = 'qwerty'
if (pass2.length>10)
{
console.log('TRUE')
}
else if (pass2.charAt(0)=='q' && pass2.includes('!'))
{
    console.log('JEst ideolo')
}
else {
    console.log ('Nie pasi')
}


//SWITCH
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// zadanie IF
let x = 50
let y = 30
if (x>y){
    console.log(`${x} jest wieksze od ${y}`)
}else{
    console.log(`${x} nie jest wieksze od ${y}`)
}

// zadanie 2 IF Else
const color1 = 'blue'
const newColor = 'green'

if (color1==newColor){
    console.log(`Kolory sie zgadzaja`)
}else{
    console.log(`Kolory sie nie zgadzaja`)
}

// zadanie IF else if 3 
let a = 50
let b = 50
if (a > b){
    console.log(`${a} jest wieksze od ${b}`)
}
else if (a==b){
    console.log(`${a} jest rowny ${b}`)
}
else{
    console.log(`${a} nie jest wieksze od ${b}`)
}

//zadanie operator warunkowy %
let c = 22

if (c % 2 == 0 ){
    console.log(`Wartosc ${c} jest parzysta`)
} else if (c % 2 != 0){
    console.log (`Wartosc ${c} jest nie parzysta`)
}
//to samo ale w operatorem warunkowym
(c % 2 == 0) ? console.log(`Wartosc ${c} jest parzysta`) : console.log(`Wartosc ${c} jest nie parzysta`)


//zadanie 5


//PETLE

// for (let i = 0 ; i < 6 ; i++){
//     console.log(i)
// }

const animals = ['kon','kot','pies','slon','zaba']

for (let i = 0 ; i < animals.length ; i++){
    console.log(`To jest zwierze: ${animals[i]}`)
}

//for of
const numbers = ['1','2','3','4','5']
for (const number of numbers){
    console.log(number * 2 )
}

//zadanie 6
let xx = 0
while ( xx <= 10 ){
    xx = xx + 2;
    console.log(xx)
} 


//zadanie do while
let yy = 20
do {
yy -= 3
//console.log ('yy loop:' + yy )
} while (yy > 0)
console.log ('yy: '+ yy)

//zadanie for of
const zadanie = [5,8,10,23,48,60]
for (const zad of zadanie){
    if (zad % 2 == 0){
        console.log (`%cLiczba ${zad} jest parzysta`, 'background-color:gold; color:red')
    } 
    else if (zad % 2 == 1){
        console.log (`Liczba ${zad} jest nieparzysta`)
    } 
}

//tablice
//metody
const table = [1,2,3,4,5]
console.log('tablice metody section:'+table)
table.unshift(-1,0)
console.log('tablice metody unshift:'+table)
table.shift()
console.log('tablice metody shift:'+table)
table.push (7)
console.log('tablice metody push:'+table)
table.pop ()
console.log('tablice metody push:'+table)

//funckje metody tablice
function multiply (z) {
    return z * 2
}
//console.log(multiply(5))
//metoda MAP
const newNumbers = table.map(multiply)
console.log (newNumbers)
//concat
const abc = ['a','b','c']
const newAbc = table.concat(abc)
console.log('concat: '+ newAbc)

