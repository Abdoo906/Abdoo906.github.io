function checkPassword() {
    var passwordBoxObject = document.
    getElementById("passwordBox");
    var passwordEnterd = passwordBoxObject.value;
    console.log("User Enterd Password:", passwordEnterd);

    var sitePassword = "Abdoo906";
    if(passwordEnterd == sitePassword) {
        console.log("Allow!");
        window.location.assign("members.html");
    } else {
        console.log("Block!");
        document.getElementById
        ("incorrect-password").style.color = "red";

        document.getElementById
        ("incorrect-password").
        innerHTML = "Incorrect password"
        
    }
}
