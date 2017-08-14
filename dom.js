
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
    console.log(donorList.getDonors());
    var info = "";
    for(let i = 0; i < newdonor.length; i++){
        info += `<p>${newdonor[i].name} ${newdonor[i].email} ${newdonor[i].amount}</p>`;
        if (perLap === true){
            info += `<p>PerLap</p>`
        }else{
            info += `<p>Single Payment</p>`
        };
    };
    table.innerHTML = info;
};
printDonors();

//HANDLE DONATE BUTTON//
donBtn.addEventListener('click', function (){
    printDonors();
    donorList.addDonors(
        name.value,
        amount.value,
        perLap.checked,
        email.value
    );

});
//PERLAP AND ONE TIME PAYMENT BUTTONS//
perLap.addEventListener('click', function(){
    perLap === true;
});
once.addEventListener('click', function(){
    perLap === false;
});


//CANCEL BUTTON//
cnclBtn.addEventListener('click', function (){
    name.value = '';
    email.value = '';
    amount.value = '';
    console.log('cleared');
});
