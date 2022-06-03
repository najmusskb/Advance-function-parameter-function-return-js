// how to set e parameter in function--part-01 

function singgara(taka) {
    console.log('singara er jonno diche', taka);
    console.log('mama singara den ');
}

// call diteche ei nicer line ta diye
singgara(50);






// how to call a var____parameter.--part -02

function singgara(taka) {
    console.log('singara er jonno diche', taka);
    console.log('mama singara den ');

}

var money = 250;
singgara(money);






// function return part-03

function bringsinggara(taka) {

    console.log('singara er jonno diche', taka);

    console.log('mama singara den');

    var sigaraprice = 10;

    var singaraquantity = taka / sigaraprice;

    return singaraquantity;

}
var money = 100;

var singara = bringsinggara(money);

console.log('ei nen singara', singara);

