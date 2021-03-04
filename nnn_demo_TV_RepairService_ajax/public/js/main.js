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

// function displayList(users) {
//     var d1 = document.createElement("div")
//     for (var i = 0; i < users.length; i++) {
//         var d2 = document.createElement("div")
//         d2.innerHTML = users[i].id + users[i].name + users[i].address + users[i].phone + users[i].date + users[i].problem + users[i].complaint_resolution;
//         d1.appendChild(d2);
//         var br = document.createElement("br")
//         d1.appendChild(br);

//     }
//     var contentDiv = document.getElementById("content")
//     contentDiv.appendChild(d1);
// }





function displayList(users) {

    var contentDiv = document.getElementById("content")
    contentDiv.innerHTML = "";
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row1 = document.createElement("tr");
    var cell0 = document.createElement("th");
    var cellText0 = document.createTextNode("id");
    var cell11 = document.createElement("th");
    var cellText11 = document.createTextNode("name");
    var cell22 = document.createElement("th");
    var cellText22 = document.createTextNode("address");
    var cell33 = document.createElement("th");
    var cellText33 = document.createTextNode("phone");
    var cell44 = document.createElement("th");
    var cellText44 = document.createTextNode("date");
    var cell55 = document.createElement("th");
    var cellText55 = document.createTextNode("problem");
    var cell66 = document.createElement("th");
    var cellText66 = document.createTextNode("complaint_resolution");

    cell0.appendChild(cellText0);
    cell11.appendChild(cellText11)
    cell22.appendChild(cellText22)
    cell33.appendChild(cellText33);
    cell44.appendChild(cellText44)
    cell55.appendChild(cellText55)
    cell66.appendChild(cellText66)

    row1.appendChild(cell0);
    row1.appendChild(cell11)
    row1.appendChild(cell22)
    row1.appendChild(cell33);
    row1.appendChild(cell44)
    row1.appendChild(cell55)
    row1.appendChild(cell66);
    tblBody.appendChild(row1)
        // creating all cells
    for (var i = 0; i < users.length; i++) {
        // creates a table row
        var row = document.createElement("tr");


        // row.innerHTML = users[i].id + users[i].name + users[i].address + users[i].phone + users[i].date + users[i].problem + users[i].complaint_resolution;

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        var cell = document.createElement("td");
        var cellText1 = document.createTextNode(users[i].id);
        var cell2 = document.createElement("td")
        var cellText2 = document.createTextNode(users[i].name)
        var cell3 = document.createElement("td")
        var cellText3 = document.createTextNode(users[i].address)
        var cell4 = document.createElement("td")
        var cellText4 = document.createTextNode(users[i].phone)
        var cell5 = document.createElement("td")
        var cellText5 = document.createTextNode(users[i].date)
        var cell6 = document.createElement("td")
        var cellText6 = document.createTextNode(users[i].problem)
        var cell7 = document.createElement("td")
        var cellText7 = document.createTextNode(users[i].complaint_resolution)
        var cell = document.createElement("td");
        var cellText1 = document.createTextNode(users[i].id);

        cell.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        cell4.appendChild(cellText4);
        cell5.appendChild(cellText5);
        cell6.appendChild(cellText6);
        cell7.appendChild(cellText7);

        row.appendChild(cell);
        row.appendChild(cell2)
        row.appendChild(cell3)
        row.appendChild(cell4);
        row.appendChild(cell5)
        row.appendChild(cell6)
        row.appendChild(cell7)


        // add the row to the end of the table body
        tblBody.appendChild(row);
    };

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    contentDiv.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
    tbl.setAttribute("id", "tbl")
}


function addUser() {


    var f = document.createElement("div");
    f.setAttribute("class", "myform");

    var label = document.createElement("label");
    label.innerText = "Name :"
    var i = document.createElement("INPUT");

    i.setAttribute("type", "text");
    i.setAttribute("id", "name");

    var br = document.createElement("br");
    var label1 = document.createElement("label");
    var i1 = document.createElement("INPUT");
    label1.innerText = "address :"

    i1.setAttribute("type", "text");
    i1.setAttribute("id", "address");


    var br1 = document.createElement("br")
    var label2 = document.createElement("label")
    var i2 = document.createElement("INPUT");
    label2.innerText = "phone :"

    i2.setAttribute("type", "text");
    i2.setAttribute("id", "phone");

    var br2 = document.createElement("br")
    var label3 = document.createElement("label")
    label3.innerText = "date :"
    var i3 = document.createElement("INPUT");
    var br3 = document.createElement("br")
    i3.setAttribute("type", "date");
    i3.setAttribute("id", "date");
    var br3 = document.createElement("br")



    var label4 = document.createElement("label")
    var i4 = document.createElement("INPUT");
    label4.innerText = "problem :"
    var br4 = document.createElement("br")
    i4.setAttribute("type", "textarea");
    i4.setAttribute("id", "problem");


    var br4 = document.createElement("br")
    var label5 = document.createElement("label")
    var i5 = document.createElement("INPUT");
    label5.innerText = "complaint_resolution :"
    i5.setAttribute("type", "textarea");
    i5.setAttribute("id", "complaint_resolution");

    var br5 = document.createElement("br")
    var btn = document.createElement("button");
    btn.setAttribute("name", "submit")
    btn.setAttribute("value", "submit")
    btn.setAttribute("id", "submit")
    btn.setAttribute("onclick", "saveData()")


    btn.innerText = "Submit"



    // i.appendChild(br)
    // i1.appendChild(br1)

    f.appendChild(label);
    f.appendChild(i);
    f.appendChild(br)
    f.appendChild(label1);

    f.appendChild(i1);
    f.appendChild(br1)
    f.appendChild(label2);
    f.appendChild(i2);
    f.appendChild(br2)
    f.appendChild(label3);
    f.appendChild(i3);
    f.appendChild(br3)
    f.appendChild(label4);
    f.appendChild(i4);
    f.appendChild(br4)
    f.appendChild(label5);
    f.appendChild(i5);
    f.appendChild(br5)
    f.appendChild(btn);
    // document.getElementsByTagName("body")
    // document.body.appendChild(f);
    var contentDiv = document.getElementById("content")
    contentDiv.innerHTML = "";

    contentDiv.appendChild(f);
}

function saveData() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    var date = document.getElementById("date");
    var problem = document.getElementById("problem");
    var complaint_resolution = document.getElementById("compliant_resolution");

    var data = {
        "name": name.value,
        "address": address.value,
        "phone": phone.value,
        "date": date.value,
        "problem": problem.value,
        "complaint_resolution": complaint_resolution.value
    }
    console.log(data);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4300/customer_table/add", true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText)
            var customerObj = JSON.parse(xhttp.responseText);
            console.log(customerObj);
            showList();
            // displayList(List.data);

        }
    };

    var dataStr = JSON.stringify(data);
    console.log(dataStr);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(dataStr);
}