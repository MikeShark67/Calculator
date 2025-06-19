let Bill =4509.00;
let people = 5;
let percentage = 12;

function calculateDiscount(Bill, percentage, people){
    if (Bill!==4509.00) {
      console.log("ijatosha");  
    }else{
        let perPersornCost = (Bill/ people) * (1 + percentage / 100);
      console.log("unafaa :$"+ people.toFixed(2));
    }
}
calculateDiscount(Bill,percentage,people);