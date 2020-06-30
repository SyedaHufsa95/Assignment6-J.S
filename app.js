// *********(****CHAP # 21 to 25****)**********

// ****Question # 01********


// var firstName = prompt("Enter Your First Name: "," ");
// var lastName = prompt("Enter Your Last Name: "," ");
// var fullName = firstName +" "+ lastName;
// alert("Welcome! " + fullName)


// ****Question # 02********


// var phone = prompt("Enter Your favorite mobile phone model","");
// var strLength = phone.length;
// document.write("My favorite Phone is: " + phone +"<br>")
// document.write("Length of String: " + strLength)


// ****Question # 03********


// var country = "Pakistani";
// var indexNum = country.indexOf("n");
// document.write("String: " + country + "<br>")
// document.write("Index of 'n': " + indexNum)



// ****Question # 04********



// var greet = "Hello World";
// var lastIndex = greet.lastIndexOf("l");
// document.write("String: " +greet + "<br>")
// document.write("Last index of 'l': " + lastIndex)


// ****Question # 05********.


// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("String: " + word + "<br>")
// document.write("Character at index 3: " + char)




// ****Question # 06********.


// var firstName = prompt("Enter Your First Name: "," ");
// var lastName = prompt("Enter Your Last Name: "," ");
// var fullName = firstName.concat(lastName);
// alert("Welcome! " + fullName)



// ****Question # 07********


// var city = "Hyderabad";
// var replWord =city.replace("Hyder","Islam") ;

// document.write("City: " + city + "<br>")
// document.write("After replacement: " + replWord)



// ****Question # 08********

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replWord = message.replace(/and/g,"&");

// document.write("Message : " + message + "<br>")
// document.write("After replacement: " + replWord)



// ****Question # 09********


// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + "<br> Type: " + typeof(str) + "<br>")
// document.write("Value: " + num + "<br> Type: " + typeof(num) + "<br>")




// ****Question # 10********


// var text = prompt("Enter any Word in lower case"," ");
// var capiText = text.toUpperCase();
// document.write("User input: " + text + "<br>")
// document.write("Upper case: " + capiText + "<br>")



// ****Question # 11********


// var sub = prompt("Enter your favorite subject"," ");
// var change = sub.charAt(0).toUpperCase() +sub.slice(1);

// document.write("User Input: " + sub + "<br>")
// document.write("Title case: " + change)




// ****Question # 12********


// var num = 35.36 ;
// var dotRemove = num.toString().replace(".","");
// document.write("Number: " + num + "<br>")
// document.write("Result: "+ dotRemove)





// ****Question # 13********



var userName = prompt("Enter Your Name"," ");
var numChars = userName.length;
 for(var i = 0; i < numChars; i++) {
 if(userName.slice(i, i + 1) === "@" ||"," || "." || "!" || "#" || "$" || "%" ||"&"){
      alert("Please enter a valid username")
  }
  else{
      alert("")
  }
 }


//  var userName = prompt("Enter Your Name"," ");
//  for (var i = 0; i < userName.length; i++) {
//  if(userName[i].charCodeAt() === 33 ||44 || 46 || 64){
//       alert("Please enter a valid username")
//   }
//   else{

//   }

//  }









// ****Question # 14********


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? "," ");
// var C = B.toLowerCase();

// for ( i=0; i < A.length; i++){
//     if(C === A[i]){
//         alert(C + " is available at " + A.indexOf(C) + " in our bakery")
//     }
//     else
//     { 
//         alert("We are sorry " + C + " is not available in our bakery")  
//     }
// }





// ****Question # 15********



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document




// ****Question # 16********


// var university = "University of Karachi";
// var arr = university.split('');

// for(i=0; i < arr.length; i++){
//    document.write( arr[i] + "<br>")
// }




// ****Question # 17********



// var user = prompt("Enter any Word"," ");
// var lastChar = user.charAt(user.length -1);
// document.write("User input: " + user + "<br>")
// document.write( "Last Character of input: " + lastChar)



// ****Question # 18********



// var text = "The quick brown fox jumps over the lazy dog";

// var word = text.split('the').length;

// document.write("Text: " + text + "<br>")
// document.write("There are " + word + " occurrence(s) of word 'the' ")




// *********(****CHAP # 26 to 30****)**********




//****CHAP # 26 to 30****** 
//****Question # 1********




// var integer = prompt("Enter integer value","3.45214");

// var num = Number(integer);
// var roundNum = Math.round(integer);
// var floorNum = Math.floor(integer);
// var cielNum = Math.ceil(integer);

// document.write("number: " + num + "<br>")
// document.write("round of value: " + roundNum + "<br>")
// document.write("floor value: " + floorNum + "<br>")
// document.write("ciel value: " + cielNum + "<br>")




//****CHAP # 26 to 30****** 
//****Question # 2********



// var integer = prompt("Enter negative float value like ","-2.673");
// var num = Number(integer);
// var roundNum = Math.round(integer);
// var floorNum = Math.floor(integer);
// var cielNum = Math.ceil(integer);
// document.write("number: " + num + "<br>")
// document.write("round of value: " + roundNum + "<br>")
// document.write("floor value: " + floorNum + "<br>")
// document.write("ciel value: " + cielNum + "<br>")






//****CHAP # 26 to 30****** 
//****Question # 3********



// var value = prompt("Enter any positve or negative value","-3 or 3");
// var absValue = Math.abs(value);
// document.write("The absolute value of " + value + " is "+ absValue)







//****CHAP # 26 to 30****** 
//****Question # 4********




// var dice = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + dice)



//****CHAP # 26 to 30****** 
//****Question # 5********


// var toss = Math.floor( Math.random() * 2 ) +1;
// var head = "Heads";
// var tail = "Tails";

// if(toss === 2){
//   document.write(toss +" <br> random coin value: " + head)
// }
// else
// {
//   document.write(toss +" <br> random coin value: " + tail)
// }





//****CHAP # 26 to 30****** 
//****Question # 6********


// var number = Math.floor( Math.random() * 100 ) +1;
// document.write("random number between 1 and 100: " + number)




//****CHAP # 26 to 30****** 
//****Question # 7********


// var weight = prompt("Enter your age in kilograms");
// var output = parseFloat(weight);
// document.write("The weight of the user is " + output + " Kilograms")





//****CHAP # 26 to 30****** 
//****Question # 8********




// var randomNum = Math.floor( Math.random() * 10) +1;
// var randomVal = prompt("Enter a number between 1 and 10", " " );

// if(randomVal == randomNum){
//   alert("Congratulations! You enter Correct Number")
// }
// else{
//   alert("Try Again!")
// }






// *********(****CHAP # 31 to 34****)**********




//****CHAP # 31 to 34****** 
//****Question # 1********


// var today = new Date();
// document.write(today)




//****CHAP # 31 to 34****** 
//****Question # 2********


// var today = new Date();
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var currentMonth = month[today.getMonth()];
// document.write("Current month: " + currentMonth)



//****CHAP # 31 to 34****** 
//****Question # 3********



// var currentDate = new Date();
// var weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// var currentDay = weekday[currentDate.getDay()];
// document.write("Today is " + currentDay)




//****CHAP # 31 to 34****** 
//****Question # 4********



// var currentDate = new Date();
// var weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var c = weekday[currentDate.getDay()];

// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }
// else{
//   alert("Not a Funday Sorry!")

// }





// ****CHAP # 31 to 34****** 
// ****Question # 5********

// var currentDate = new Date();
// var monthDate = currentDate.getDate();

// if(monthDate < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }





// ****CHAP # 31 to 34****** 
// ****Question # 6********


// var date = new Date();
// var sinceDate = new Date("Jan 1, 1970");

// var dateMili = date.getTime();
// var sinceDateMili = sinceDate.getTime();
// var mili = dateMili -  sinceDateMili;
// var minute = mili/(1000*60*60)

// document.write("Current Date: " + date + "<br>")
// document.write("Elapsed miliseconds since Jan 1, 1970: " + mili +"<br>")
// document.write("Elapsed minutes since Jan 1, 1970: " + minute)





// ****CHAP # 31 to 34****** 
// ****Question # 7********


// var today = new Date();
// var hours = today.getHours();
// if(hours <12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }





// ****CHAP # 31 to 34****** 
// ****Question # 8********


// var date = new Date(2020, 11, 31);
// document.write(date)





// ****CHAP # 31 to 34****** 
// ****Question # 9********


// var today = new Date();
// var ramadan = new Date(2020, 3, 24) ;
// var todayTime= today.getTime();
// var ramadanTime= ramadan.getTime();
// var diffTime =  todayTime - ramadanTime;
// var noOfDays= Math.floor(diffTime/(1000*60*60*24));
// document.write(noOfDays + " days have passed since 1st Ramadan, 2020")





// ****CHAP # 31 to 34****** 
// ****Question # 10********


// var today = new Date();
// var referYear = new Date(2015, 1, 1);
// var todayTime = today.getTime();
// var referTime = referYear.getTime();
// var diff = todayTime - referTime ;
// var seconds = Math.floor(diff/(1000*60));
// document.write("On reference date " + today + "<br>")
// document.write(seconds  +" seconds had passed since beginning of 2015")





// ****CHAP # 31 to 34****** 
// ****Question # 11********


// var date1 = new Date();
// var date2 = new Date();
// date2.setHours(date2.getHours() -1);
// document.write("Current date: " + date1 + "<br>")
// document.write("1 hour ago, it was " + date2)




// ****CHAP # 31 to 34****** 
// ****Question # 12********



// var date1 = new Date();
// var date2 = new Date();
// date2.setFullYear(date2.getFullYear() - 100);
// document.write("Current date: " + date1 + "<br>")
// document.write("100 years back it was: " + date2 )








// ****CHAP # 31 to 34****** 
// ****Question # 13********



// var age = prompt("Enter your Age","");
// var date = new Date();
// var years = date.getFullYear() - age;
// document.write( "Your age is " + age + "<br>")
// document.write("Your birth year is " + years)




// ****CHAP # 31 to 34****** 
// ****Question # 14********



// var date = new Date();
// var customerName = prompt("Enter User Name" , " ");
// var currentMonth = prompt("Enter Current Month" , " "); 
// var numberOfUnits = prompt("Enter Number Of Units")
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var  netAmountPayable = numberOfUnits * chargesPerUnit;
// var grossAmountPayable= netAmountPayable + latePaymentSurcharge;
// netAmountPayable.toFixed(2);
// grossAmountPayable.toFixed(2);


// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: " + customerName + "<br>")
// document.write("Month: " + currentMonth + "<br>")
// document.write("Number of units: " + numberOfUnits + "<br>")
// document.write("Charges per unit: " + chargesPerUnit + "<br>")
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>")
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>")
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable)








// *********(****CHAP # 35 to 38****)**********



// ****CHAP # 35 to 38****** 
// ****Question # 1********



// function date(){
//     return new Date();
// }
// document.write(date())




// ****CHAP # 35 to 38****** 
// ****Question # 2********


// var firstName = prompt("Enter Your First Name","");
// var lastName = prompt("Enter Your Last Name","");

// function greet(){
//     var fullName = firstName + " " + lastName
//     alert("Welcome " + fullName)

// }
// greet()




// ****CHAP # 35 to 38****** 
// ****Question # 3********


// var a = +prompt("Enter first Number","");
// var b = +prompt("Enter second Number","");

// function add(){
//     var c = a + b;
//     return c ;
// }
// alert(add())




// ****CHAP # 35 to 38****** 
// ****Question # 4********


// var num1 = +prompt("Enter First Number"," ");
// var num2 = +prompt("Enter Second Number"," ");
// var opr = prompt("Enter operator"," ");

// function Calculator(){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else  if(opr === "-"){
//         return num1 - num2
//     }
//     else  if(opr === "*"){
//         return num1 * num2
//     }
//     else  if(opr === "/"){
//         return num1 / num2
//     }
//     else  if(opr === "%"){
//         return num1 % num2
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }

// document.write("Result of " + num1 + " "+ opr + " " + num2 + " is: "  + Calculator())



// ****CHAP # 35 to 38****** 
// ****Question # 5********



// function sqr(a){
//     return a*a
// }
// alert(sqr(5))





// ****CHAP # 35 to 38****** 
// ****Question # 6********


// var a = +prompt("Find a Factorial of any number","");

// function fact(a) {
//     if (a < 0) return;
//     if (a < 2) return 1;
//     return a * fact(a - 1);
//   }

// alert(fact(a))




// ****CHAP # 35 to 38****** 
// ****Question # 7********




// var a = prompt("Enter start number for counting","");
// var b = prompt("Enter End number for counting","");

// function count(a,b){
//     for(i=a; i<=b; i++){
//         document.write(i + "<br>")
//     }
// }

// count(a,b)


// ****CHAP # 35 to 38****** 
// ****Question # 8********



// var base = prompt("Enter Base value of a triangle","");
// var perp = prompt("Enter perpendicular value of a triangle","");

// function hypotenuse(base, perp) {
//     function square(a) {
//          return a*a ; 
//         }

//     return Math.sqrt(square(base) + square(perp));
//  }
 
// alert(hypotenuse(base, perp))





// ****CHAP # 35 to 38****** 
// ****Question # 9********



// function Area(width , height){
//     return width * height;   
// }
// alert(Area(4,5))





// ****CHAP # 35 to 38****** 
// ****Question # 10********


// Write a JavaScript function that checks whether a passed
// string is palindrome or not?


// ****CHAP # 35 to 38****** 
// ****Question # 11********


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));



// ****CHAP # 35 to 38****** 
// ****Question # 12********



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'





// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord =  strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//  alert(findLongestWord("Web Development Tutorial"))





// ****CHAP # 35 to 38****** 
// ****Question # 13********


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o'));





// ****CHAP # 35 to 38****** 
// ****Question # 14********


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2



// function calcCircumference(radius) {
//     var circumference = (Math.PI * 2) * radius;
//     var area = (Math.pow(radius, 2)) * Math.PI;
   
//     console.log ("The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + ".")
//   }

//   calcCircumference()



// function  calcCircumference(radius){

//     var circumference= (Math.PI * 2) * radius;

// function calcArea(){
//     var area = (Math.pow(radius, 2)) * Math.PI;
// }
// console.log ("The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + ".")

// }
// calcCircumference()

