// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(`The type of date is: ${typeof myDate}`);   //IMPORTANT QUESTION OF INTERVIEW
//some other ways to declare Date
let myCreatedDate1 = new Date(2023, 0, 23);      //months starts from 0;
console.log()
console.log("Date stored in myCreatedDate1 variable:", myCreatedDate1);                   //output->  2023-01-23T00:00:00.000Z
console.log("Date stored in myCreatedDate1 variable:", myCreatedDate1.toDateString());    //output-> Mon Jan 23 2023
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log();
console.log("Date stored in myCreatedDate2 variable:", myCreatedDate2.toLocaleString());    //output-> 1/23/2023, 5:03:00 AM
let myCreatedDate3 = new Date("2023-01-14");    //yyyy-mm-dd format
console.log();
console.log("Date stored in myCreatedDate3 variable:", myCreatedDate3.toLocaleString());    //output-> 1/14/2023, 12:00:00 AM
let myCreatedDate4 = new Date("01-14-2023");    //mm-dd-yyyy format
console.log();
console.log("Date stored in myCreatedDate4 variable:", myCreatedDate4.toLocaleString());    //output-> 1/14/2023, 12:00:00 AM


//timestamps in Date
let myTimeStamp = Date.now();
console.log();
console.log();
console.log(myTimeStamp);
console.log("Timestamp of any particular date:", myCreatedDate1.getTime());
console.log(`To convert the date into seconds divide it by 1000: ${Math.floor(Date.now() / 1000)}`);

//some other methods
let newDate = new Date();
console.log();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//THE MOST IMPORTANT METHOD OF Date IS toLocateString AS IT IS USED TO CUSTOMIZE THE DATE OUTPUT
console.log(newDate.toLocaleString('default', {     //here default is for internationalization
    weekday: "short",
    month: "long",
    year: "numeric",
}))
