function userName(){
    let userName = prompt('Please Enter Your Name');

if (userName == 'Barrett'){
    document.write('<h3>' + 'Salve Civis Barrett' + '</h3>');
} else if (userName != 'Barrett'){
    document.write('<h3>' + 'Salve Civis' + '</h3>');
}
}

let getUserName = (userName);

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

let timeGreet = (greeting);

function years(){
    var today = new Date();
    var year = today.getFullYear();
    var est = new Date ('Sep 04, 0476');
    var difference = today.getTime() - est.getTime();
    difference = (difference / 31556900000);
    
    var elMsg = document.getElementById('message')
    elMsg.textContent = Math.floor(difference) + ' Years since the fall of the Western Empire';

}

let timeSince = (years);
