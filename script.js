var deposit;
var name;
var someNames=[];
var deposits=[];
$(".newDeposit").click(function() {

    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
    someNames.push(name);
    deposits.push(deposit);
    var arrayOfAccount = deposits.length;
    $('.number').text("Number of Transactions: " + arrayOfAccount);
    var total = 0;
    deposits.forEach(function(something) {
        var numOfAccount = parseInt(something); 
        total = total + numOfAccount;
        $('.total').text("Total Amount Deposited: " + total);
    });
    

});


$(".update").click(function() { 
    if (deposits.length === 0 && someNames.length === 0) {
        alert("Give me money first.");
    } else {
        var latest = deposits.length - 1;
        var latestName = someNames.length-1;
        var IDKname = someNames[latestName];
        var IDK = deposits[latest];
        alert("The latest deposit of $" + IDK + " from " + IDKname + " is now in my wallet. Thank you for the charity! Sucker!");
    }
});