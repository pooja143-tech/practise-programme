function validate() {
    var u1 = document.getElementById("u1")
    var p1 = document.getElementById("p1")
    if (u1.value.length < 6) {

        let msg = "Invalid Username";
        var errormsg = document.getElementById("error msg")
        errormsg.innerText = msg;
        errormsg.style.color = "red"
            // u1.style.borderColor = "red"

    }
    if (p1.value.length == 0) {
        p1.style.borderColor = "red"
    }
}