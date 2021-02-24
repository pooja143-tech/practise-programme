function showList() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:4300/customer_table", true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && this.status == 200) {
            //console.log(xhttp.responseText)
            var List = JSON.parse(xhttp.responseText);
            console.log(List.data);
            displayList(List.data);
        }
    };
    // xhttp.open("GET", "http://localhost:4300/customer_table", true);
    xhttp.send();
}

function displayList(users) {
    var d1 = document.createElement("div")
    for (var i = 0; i < users.length; i++) {
        var d2 = document.createElement("div")
        d2.innerHTML = users[i].id + users[i].name + users[i].address + users[i].phone + users[i].date + users[i].problem + users[i].complaint_resolution;
        d1.appendChild(d2);
        var br = document.createElement("br")
        d1.appendChild(br);
    }
    var contentDiv = document.getElementById("content")
    contentDiv.appendChild(d1);
}