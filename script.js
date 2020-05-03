let who = ['Mi unicornio','Mi gato','Mi Kirby','Mi tiburón', 'Mi llama'];
let what = ['se comió','quemó','robó','rompió', 'dañó'];
let when = ['antes de cenar','justo cuando salí','mientras dormía','cuando yo me bañaba'];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " + que[numQue] + " " + "mi tarea" + " " + cuando[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;