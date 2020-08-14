
function accountDetails(diposited,withdraw){
       this.diposited=diposited;
       this.withdraw=withdraw;
       let print=function(){ console.log(bank);}
    }
function calBalance(){
     let balance=this.diposited-this.withdraw;
    return balance;
}
let joey=new accountDetails(3000,1000);
let zayn=new accountDetails(4000,1000);
console.log(`joey's balance ${calBalance.call(joey)}`);
console.log(`zayn's balance ${calBalance.call(zayn)}`);