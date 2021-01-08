function userName(){
    let userName = prompt('Qui es tu civis?');

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

function popQuiz(){
    let affirmative = 107;
    let answer = prompt('In what year BC did Gaius Marius reform the Roman Military?');
    if (answer == affirmative){
        alert('Roma Invicta');
    }
    while (answer < 107 || answer > 107){
        answer = prompt('The Consul is disappointed. The answer is 107');
        if (answer == affirmative){
            alert('Roma Invicta');
            break;
        } else if (answer < affirmative);{
            alert('Vae victis...');
            answer = prompt('In what year BC did Gaius Marius reform the Roman Military?');
        }
    }
}

function guards(){
    let answer = prompt('How many Lictors do you require?');
for (let i = 0; i < answer ;i++){
    var imageContainer = document.getElementById('images');
    imageContainer.innerHTML+='<img src="https://www.ancient.eu/img/r/p/500x600/5045.png?v=1485682058"/>';
    }
}