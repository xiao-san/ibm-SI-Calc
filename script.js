function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("years").value;
    var interest = principal * time * rate / 100;
    var year = new Date().getFullYear() + parseInt(time);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark><br />" +
        "at an interest rate of <mark>" + rate + "%</mark><br />" +
        "you will recieve an amount of <mark>" + interest + "</mark><br />" +
        "in the year <mark>" + year +"</mark>";
}
function updateRate(rate){
    document.getElementById("rate_val").innerText = rate;
}
function validate(principal){
    if ( principal.value <= 0) {
        alert("Enter a positive number!");
        principal.focus();
    }
}
