function addList() {
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

function addUser() {

    var f = document.createElement("div");
    f.setAttribute("class", "myform");
    f.setAttribute("method", "POST");
    f.setAttribute("action", "/home");
    document.body.appendChild(f);

    var label = document.createElement("label");
    label.innerText = "Name :"
    var i = document.createElement("INPUT");
    var br = document.createElement("br");
    i.setAttribute("type", "text");
    i.set

    var label1 = document.createElement("label");
    var i1 = document.createElement("INPUT");
    label1.innerText = "address :"
    var br1 = document.createElement("br")
    i1.setAttribute("type", "text");


    var label2 = document.createElement("label")
    var i2 = document.createElement("INPUT");
    label2.innerText = "phone :"
    var br2 = document.createElement("br")
    i2.setAttribute("type", "text");

    var label3 = document.createElement("label")
    label3.innerText = "date :"
    var i3 = document.createElement("INPUT");
    var br3 = document.createElement("br")
    i3.setAttribute("type", "date");


    var label4 = document.createElement("label")
    var i4 = document.createElement("INPUT");
    label4.innerText = "problem :"
    var br4 = document.createElement("br")
    i4.setAttribute("type", "textarea");


    var label5 = document.createElement("label")
    var i5 = document.createElement("INPUT");
    label5.innerText = "complaint_resolution :"
    var br5 = document.createElement("br")
    i5.setAttribute("type", "textarea");

    var btn = document.createElement("button")
    btn.setAttribute("name", "submit")
    btn.setAttribute("value", "submit")
    btn.setAttribute("class", "submit")
    btn.innerText = "Submit"


    i.appendChild(br)
    i1.appendChild(br1)
    i2.appendChild(br2)
        // i.appendChild(br)
        // i1.appendChild(br1)

    f.appendChild(label);
    f.appendChild(i);
    f.appendChild(label1);
    f.appendChild(i1);
    f.appendChild(label2);
    f.appendChild(i2);
    f.appendChild(label3);
    f.appendChild(i3);
    f.appendChild(label4);
    f.appendChild(i4);
    f.appendChild(label5);
    f.appendChild(i5);
    f.appendChild(btn);

    body[0].appendChild(f)
}