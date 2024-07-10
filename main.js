var regForm = document.querySelector(".registerForm");
var amount = document.querySelector(".amount");
var selection = document.querySelector("select");

regForm.onsubmit = function(e) {
    e.preventDefault();
    if (selection.value == "usd") {
        var result = (amount.value) * 3.75;
    } else if (selection.value == "jd") {

        var result = (amount.value) * 5.31;
    } else {
        var result = (amount.value);
    }
    document.querySelector(".result").innerHTML = result;

}