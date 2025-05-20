import { Address } from "./address.model";

export class User{
   constructor(private firstname : string,private lastname : string,private mail : string,private password : string, private phone: string, private address: Address){

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

   getAdress(){
      return this.address;
   }

   getPhone(){
      return this.phone;
   }
}