function customers(bank){
    return function AccountDetails(diposited,withdraw){
       this.diposited=diposited;
       this.withdraw=withdraw;
       console.log(`${bank}`);
    }
}
function calBalance(){
     let balance=this.diposited-this.withdraw;
    return balance;
}

let joey=new cus(3000,1000);
let zayn=new cus(4000,1000);
console.log(`joey's balance ${calBalance.call(joey)} `);
console.log(`zayn's balance ${calBalance.call(zayn)}`);