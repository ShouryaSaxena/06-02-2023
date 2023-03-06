
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

users = JSON.parse(localStorage.getItem('user'));



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

    let user = {
        userName: name,
        userTable: table,
        userSlot: slot
    }
    localStorage.setItem("user", JSON.stringify(users));

    try {
        if (user.userName === "" || user.userSlot === "" || user.userTable === "") {
            alert("Error: No Field should be Empty!!");
        }
    } catch (error) {

    }

    if (users === null) {
        users.push(user);
    }
    else {
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



    // try {
    //     if (users[0] === null) {
    //         users.push(user);
    //     }
    //     let present = false;
    //     for (let i = 0; i < users.length; i++) {
    //         if (user.userName === users[i].userName) {
    //             present = true;
    //             console.log(`User Slot already Booked at ${users[i].userTable} at ${users[i].userSlot}`);
    //         }
    //     }
    //     if (present != true) {
    //         users.push(user);
    //     }
    // } catch (error) {
    //     users.push(user);
    //     console.log(error);
    // }




    let display = "";
    setTimeout(() => {
        display += "Please Wait...";
        document.getElementById('output').innerHTML = display;
    }, 2000)
    setTimeout(() => {
        display += `<br>Getting Your Slot Booked....`;
        document.getElementById('output').innerHTML = display;
    }, 5000)

    setTimeout(() => {
        display = `Slot Booked!! <br> Name: ${user.userName}<br>Date & Time: ${user.userSlot}<br>Table: ${user.userTable}<br><br>`;
        document.getElementById('output').innerHTML = display;
    }, 8000)

    setTimeout(() => {
        display += `Thanks ${user.userName}, The Food will be Waiting :)`;
        document.getElementById('output').innerHTML = display;
    }, 10000)

    setTimeout(() => {
        document.getElementById('name').value = "";
        document.getElementById('table').selectedIndex = 0;
        document.getElementById('slot').value = null;
        document.getElementById('p').value = null;
    }, 11000)

}


// let bookings = "";
// function showBookings() {
//     for(let i = 0; i < users.length; i++){
//         bookings += `Name: ${users[i].userName}     Slot: ${users[i].userSlot}    Table: ${users[i].userTable}`;
//         document.getElementById("output").innerHtml = bookings;
//     }
// }
