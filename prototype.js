function Employee(name,surname){
this.name=name;
this.surname=surname;
}
Employee.prototype.getName = function(){
    return this.name;
}
Employee.prototype.getsurname=function()
{
return this.surname;
}
function Manager(name,surname){
    this.name=name;
    this.surname=surname;
}
Object.setPrototypeOf(Manager.prototype,Employee.prototype)  //linking Manager prototype to employee prototype
var emp1=new Employee("neha","khatriya");
var emp2=new Employee("zayn","malik");
var mang1=new Manager("joey","tribiani");
console.log(emp1.getName()+" "+ emp1.getsurname());
console.log(emp2.getName()+" "+ emp2.getsurname());
console.log(mang1.getName()+" "+ mang1.getsurname());
