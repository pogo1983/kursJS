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
function test() {
    console.log(`Hi Guys`)
}
test()
//funkcja podlega hoistingowi - wszystko czytane jest od góry
