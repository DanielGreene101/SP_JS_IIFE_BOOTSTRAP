console.log('dom.js works');
//INPUT INFO//
let name = document.getElementById('name');
let amount = document.getElementById('amount');
let email = document.getElementById('email');
//BUTTONS//
let cnclBtn = document.getElementById('cancel');
let donBtn = document.getElementById('donate');
let perLap = document.getElementById('option1');
let once = document.getElementById('option2')
//TABLE//
let table = document.getElementById('tables');


//ADD NEW DONORS TO DOM//
function printDonors() {
    let newdonor = donorList.getDonors();
    let info = "";
    for(let i = 0; i < newdonor.length; i++){
        info.innerHTML += 
            `<tr><td>${newdonor[i].name} + ${newdonor[i].email} + ${newdonor[i].amount}</td></tr>`;
    }
    table.innerHTML += info;
};

//HANDLE DONATE BUTTON//
donBtn.addEventListener('click', function (){
    printDonors();
    donorList.addDonors(
        name.value,
        amount.value,
        perLap.checked,
        email.value
    );
    console.log('They be printing');
});

//CANCEL BUTTON//
cnclBtn.addEventListener('click', function (){
    name.value = '';
    email.value = '';
    amount.value = '';
    console.log('cleared');
});

