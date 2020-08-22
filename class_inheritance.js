class User{
    constructor(name,password)
    {
        this.name=name;
        this.password=password;
    }
    getuser(){
        console.log(this.name+" has registered")
    }
}
class member extends User{
    constructor(name,password,email){
        super(name,password);
        this.email=email;
    }
    getmember(){
        console.log(this.name+" has email "+this.email);
    }
}
let joey= new User("joey","123");
let zayn= new member("zayn","abc","zap@gmail.com");
joey.getuser();
zayn.getuser();
zayn.getmember();
