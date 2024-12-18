// Exploring Conditional Statements and Loops
/*
I'm not sure if you want me to do console.log()s for telling the user about the cart, seeing as the user would have to be logged
in to the console to view the information, which would be unexpected for a frontend program, but we haven't really been writing to
the document or anything else here so far, so I guess I'll just do that.
*/
// Task 1: Implement a conditional statement to check if a user is logged in.
// This doesn't need to be anything complex, a simple let loggedIn = true will do.
let loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn',
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']
// Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user.
// If they are not logged in, tell the user they will need to log in before they can view their cart.
if (loggedIn) {
    console.log("The items in your shopping cart are:")
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
}
else {
    console.log("You need to log in to view your cart.")
}

// Exploring Functions in JavaScript
let accountBalance = 12 // I am not rich.
// Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.
function depositMoney(deposit, accountBalance) {
    return accountBalance += deposit;
}
// Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.
function withdrawMoney(withdrawal, accountBalance) {
    return accountBalance -= withdrawal
}
// Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.
function checkBalance(accountBalance) {
    console.log("You have $" + accountBalance + " left in your account.")
}

accountBalance = depositMoney(20, accountBalance)
accountBalance = withdrawMoney(10495, accountBalance)
checkBalance(accountBalance)