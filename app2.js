function greeting(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'Bonum Vesperam';
    } else if (hourNow > 12) {
        greeting = 'Bona Dies';
    } else if (hourNow > 0) {
        greeting = 'Bonum Mane';
    } else {
        greeting = 'Gratissium';
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Bonum Vesperam';
// } else if (hourNow > 12) {
//     greeting = 'Bona Dies';
// } else if (hourNow > 0) {
//     greeting = 'bonum Mane';
// } else {
//     greeting = 'Gratissium';
// }

// document.write('<h3>' + greeting + '</h3>');