class User {
    constructor(name, age, login, password){
     this.name = name;
     this.age = age;
     this.login = login;
     this.password = password;
    } 
    getName(){
     return this.name;
    }
    setName(value){
     this.name = value;
    }
    getAge(){
     return this.age;
    }
    setAge(value){
     this.age = value;
    }
    getLogin(){
     return this.login;
    }
    setLogin(value){
     this.login = value;
    }
    getPassword(){
     return this.password;
    }
    setPassword(value){
     this.password = value;
    }
   } 
   export {User}