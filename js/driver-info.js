var tbody = document.getElementById("tbody1");
function AddItemToTable(name, email, phone, detail) {
  let tRow = document.createElement("t_row");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerHTML = name;
  td2.innerHTML = email;
  td3.innerHTML = phone;
  td4.innerHTML = detail;

  tRow.appendChild(td1);
  tRow.appendChild(td2);
  tRow.appendChild(td3);
  tRow.appendChild(td4);

  tbody.appendChild(tRow);
}

function AddAllItemsToTable(TheDriver) {
    tbody.innerHTML = "";
    TheDriver.forEAch(element => {
        AddItemToTable(element.Full_name, element.Email, element.Contact_no, element.Car_Details);
    })
}