function years(){
    var today = new Date();
    var year = today.getFullYear();
    var est = new Date ('Sep 04, 0476');
    var difference = today.getTime() - est.getTime();
    difference = (difference / 31556900000);
    
    var elMsg = document.getElementById('message')
    elMsg.textContent = Math.floor(difference) + ' Years since the fall of the Western Empire';

}


// var today = new Date();
// var year = today.getFullYear();
// var est = new Date ('Sep 04, 0476');
// var difference = today.getTime() - est.getTime();
// difference = (difference / 31556900000);

// var elMsg = document.getElementById('message')
// elMsg.textContent = Math.floor(difference) + ' Years since the fall of the Western Empire';