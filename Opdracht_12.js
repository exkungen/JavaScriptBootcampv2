var nummer = (function () {
    var teller = 0;
    return function () {return teller += 2 * 3;}
})();

function telfunctie(){
    document.getElementById("teller").innerHTML = nummer();
}ggerger