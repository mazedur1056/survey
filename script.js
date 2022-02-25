function validation() {
    let x = document.forms["survey"]["firstName"].value;
    if (isNaN(x)) {
        text = "Input not valid";
    } else {
    text = "Input OK";
    }
    document.getElementById("firstNameMsg").innerHTML = text;
}