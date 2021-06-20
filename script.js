function compute(){
/* Fetching the input values */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("years").value;
    var interest = principal * time * rate / 100;
//year variable is used during the output
    var year = new Date().getFullYear() + parseInt(time);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark><br />" +
        "at an interest rate of <mark>" + rate + "%</mark><br />" +
        "you will recieve an amount of <mark>" + interest + "</mark><br />" +
        "in the year <mark>" + year +"</mark>";
}
function updateRate(rate){
/* the parameter of this function is the value present inside rate input element */
    document.getElementById("rate_val").innerText = rate;
}
function validate(principal){
/*
* The parameter of this function is the element with id 'principal'
* Since the event is fired on the same object,
* the parameter is given during function call using 'this' keyword
* refer index.html line:15
*/
    if ( principal.value <= 0) {
        alert("Enter a positive number!");
        principal.focus();
    }
}
