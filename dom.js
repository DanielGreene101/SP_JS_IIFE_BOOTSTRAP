
console.log('dom.js works');
//INPUT INFO//
let name = document.getElementById('name');
let amount = document.getElementById('amount');
let email = document.getElementById('email');
//BUTTONS//
let cnclBtn = document.getElementById('cancel');
let donBtn = document.getElementById('donate');
//TABLE//
let table = document.getElementById('tables');


var info = "";
//ADD NEW DONORS TO DOM//
function printDonors() {
    let newdonor = donorList.getDonors();
    console.log(donorList.getDonors());
    for(let i = 0; i < newdonor.length; i++){
        info += `<p>${newdonor[i].name} ${newdonor[i].email} ${newdonor[i].amount}</p>`;
    newTable();
    };
};
printDonors();

function newTable (){
    table.innerHTML = info;
    console.log();

}



//HANDLE DONATE BUTTON//
donBtn.addEventListener('click', function (){
    let donor = {};
    let newPer = ""
    donorList.addDonors(
        donor.name = name.value,
        donor.amount =  amount.value,
        donor.email = email.value
    );
//    console.log(donor);
    newPer += `<p>${donor.name} ${donor.email} ${donor.amount}</p>`;
    
        console.log($('#option1'));
    if ($('#option1').hasClass('active')){
            newPer += 'PerLap';
        }else if($('#option2').hasClass('active')){
            newPer += 'One Time Payment';
        }else{
            alert('SELECT PAYMENT TYPE');
        };
    table.innerHTML += newPer;
});



//CANCEL BUTTON//
cnclBtn.addEventListener('click', function (){
    name.value = '';
    email.value = '';
    amount.value = '';
    console.log('cleared');
});
