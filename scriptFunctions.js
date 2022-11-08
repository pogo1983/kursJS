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

//Shift + Alt + F = format code
//Functions section from course

//deklaracja funkcji
//test() - wywolanie funckji przed jej zdefiniowaniem - przez hoisting
function test() {
    console.log(`Hi Guys`)
}
test()
//funkcja podlega hoistingowi - wszystko czytane jest od góry, i wynoszone jest do góry

//zeby nie podlegalo hoistingowi:
//wyrazenie funkcyjne
const helloWorld = function (){
console.log(`Czesc bez hoitingu`)
}
helloWorld()

//funkcja z argumentami
function add01(params){
    console.log(`Podany argument to: ${params}`)
}
add01('pogo')

//parametry podajemy podczas tworzenia funckji
//argumenty podajemy podczas wywolania funckji
function add(x,y){
    z = x + y 
    console.log(`Podany argument to: ${z}`)
}
add(3,4)