function validation() {
    let firstName = document.forms["survey"]["firstName"].value;
    let v = 0;
    if (firstName == "") {
        document.getElementById("firstNameMsg").innerHTML = "Enter your first name";
    } else {
        document.getElementById("firstNameMsg").innerHTML = "";
        v = v+1;
    }

    let lastName = document.forms["survey"]["lastName"].value;
    if (lastName == "") {
        document.getElementById("lastNameMsg").innerHTML = "Enter your last name";
    } else {
        document.getElementById("lastNameMsg").innerHTML = "";
        v = v+1;
    }

    let email = document.forms["survey"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        document.getElementById("emailMsg").innerHTML = "";
        v = v+1;
    } else {
        document.getElementById("emailMsg").innerHTML = "Enter a valid email";
    }

    let date = new Date(document.forms["survey"]["date"].value);
    var today = new Date();
    if (date >= today || date == "Invalid Date") {
        document.getElementById("dateMsg").innerHTML = "Invalid birth date"
    } else {
        document.getElementById("dateMsg").innerHTML = "";
        v = v+1;
    }

    if (v == 4) {
        alert("Successfully submitted");
    }
}