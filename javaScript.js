//Generate random password
function generate() {

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

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