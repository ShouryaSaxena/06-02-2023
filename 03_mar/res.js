
let tables = ["", "Table-1", "Table-2", "Table-3", "Table-4", "Table-5", "Table-6", "Table-7", "Table-8", "Table-9", "Table-10"];

let users = [];
let t = document.getElementById('table');


for (let i = 0; i < tables.length; i++) {
    let opt = document.createElement('option');
    opt.textContent = tables[i];
    opt.value = tables[i];
    t.appendChild(opt);
}

disablingFirst = () => {
    t.options[0].disabled = true;
}

JSON.parse(localStorage.getItem('userkey'));


match = (select) => {


    const selectedOption = select.value;

    //console.log(selectedOption);
    //console.log();

    for (let i = 0; i < tables.length; i++) {
        if (i == 0) {
            t.options[i].disabled = true;
        }
        t.options[i].disabled = false;
    }

    if (users != null) {
        for (let i = 0; i < users.length; i++) {
            if (selectedOption === users[i].userSlot) {
                console.log(`Slot already booked for ${users[i].userTable}`);
                for (let j = 0; j < tables.length; j++) {
                    if (t.options[j].value === users[i].userTable) {
                        t.options[j].disabled = true;
                    }
                }

            }
        }

    }
}


disablingFirst = () => {
    t.options[0].disabled = true;
}




check = () => {



    let name = document.getElementById('name').value;
    let table = document.getElementById('table').value;
    let slot = document.getElementById('slot').value;

    var userList = null;
    var user = {
        userName: name,
        userTable: table,
        userSlot: slot,
    };
    // console.log(user)
    users = JSON.parse(localStorage.getItem("userKey"));
    

    if (users != null) {
        
        users = userList;
        users.push(user);

    }
    else {
        console.log(users);
        users = [];
        users.push(user);
    }
    localStorage.setItem("userkey", JSON.stringify(users));

    let present = false;
    for (let i = 0; i < users.length; i++) {
        if (user.userName === users[i].userName) {
            present = true;
            console.log(`User Slot already Booked at ${users[i].userTable} at ${users[i].userSlot}`);
        }
    }
    if (present != true) {
        users.push(user);
    }

    


}


// let bookings = "";
// function showBookings() {
//     for(let i = 0; i < users.length; i++){
//         bookings += `Name: ${users[i].userName}     Slot: ${users[i].userSlot}    Table: ${users[i].userTable}`;
//         document.getElementById("output").innerHtml = bookings;
//     }
// }