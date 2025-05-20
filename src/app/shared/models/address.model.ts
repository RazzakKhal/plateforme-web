export class Address{
   constructor(private adressLine1 : string,private city : string,private postalCode : string,private country : string = "FR"){

   }

   getAdressLine1(){
    return this.adressLine1;
   }

   getCity(){
    return this.city;
   }

   getPostalCode(){
    return this.postalCode;
   }

   getCountry(){
    return this.country;
   }

}
