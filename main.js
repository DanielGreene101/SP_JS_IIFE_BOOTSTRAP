console.log("IFFE");
var donorList = function() {
//original array//
    var donors = [
        {
            'name': 'Daniel Greene',
            'amount': '$100,000,000',
            'perLap': true,
            'email': 'd.b.greene101@gmail.com'
        }
    ];
    
//to add new//
        return {
            getDonors: function () {
                return donors;
                console.log('got the donors!');
            },
            addDonors: function(name, amount, perLap, email) {
                    donors.push(
                        {
                            'name': name,
                            'amount': amount,
                            'perLap': perLap,
                            'email': email
                        }
                    );
        }}
}();