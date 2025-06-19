const calc = require(`readline`);

const mach = calc.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const totalBill = 4509.00;
const discount = 0.12;
const numPeople = 5;

const discountedTotal = totalBill * (1 - discount);

const  amountPerPerson = discountedTotal / numPeople;

const formattedAmount = amountPerPerson.toFixed(2);

console.log(`\noriginal Bill: Ksh ${totalBill}`);
console.log(`Discount Applied: ${discount * 100}%`);
console.log(`Total after Discount: Ksh ${discountedTotal.toFixed(2)}`);
console.log(`\nEach person should pay: Ksh ${formattedAmount}`);

mach.question("\nEnter the amount you plan to pay: Ksh ", (input) =>{
const userAmount = parseFloat(input);

if(userAmount.toFixed(2)=== formattedAmount){
    console.log("Correct amount!");
}else{
 console.log(`Incorrect. You should pay : Ksh ${formattedamounnt}`);
}

mach.close();
});
