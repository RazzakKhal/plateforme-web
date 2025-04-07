export class User{
   constructor(private firstname : string,private lastname : string,private mail : string,private password : string){

   } 

   getFirstname(){
    return this.firstname;
   }

   getLastname(){
    return this.lastname;
   }

   getMail(){
    return this.mail;
   }

   getPassword(){
    return this.password;
   }   
}