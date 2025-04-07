export class LoginForm{
    constructor(private mail : string,private password : string){

    } 
 
    getMail(){
     return this.mail;
    }
 
    getPassword(){
     return this.password;
    }   
}