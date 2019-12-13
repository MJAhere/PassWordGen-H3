//Generate random password
function generate() {

    //set password length/complexity
    var complexity = document.getElementById("slider").value;

    //possible password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

    var password = "";

    //create for loop to choose pw charecters
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }

    //add pw to textbox/diplay area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 64

document.getElementById("length").innerHTML = "Length: 64";

//function to set length based on slider position
document.getElementById("slider").oninput = function () {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//funtion to copy pw to clipboaed
function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}