// chapter 14-16

// question1
// var students = [];

// question2
// var studentsName = new Array();

//question3
// var pets = ["Puss In The Boot", "Scooby Doo", "Mickey Mouse"];

// question4
// var serialNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// question5
// var yesOrNo = [true, false];

// question6
// var randomArray = ["Mickey mouse", 1, true];

// question7 

// var qualifictions = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "Ph.D"]
// document.write("1) "+ qualifictions[0] + "<br></br>");
// document.write("2) "+ qualifictions[1] + "<br></br>");
// document.write("3) "+ qualifictions[2] + "<br></br>");
// document.write("4) "+ qualifictions[3] + "<br></br>");
// document.write("5) "+ qualifictions[4] + "<br></br>");
// document.write("6) "+ qualifictions[5] + "<br></br>");
// document.write("7) "+ qualifictions[6] + "<br></br>");
// document.write("8) "+ qualifictions[7] + "<br></br>");


// question8
// var totalMarks = 500;
// var studentsName = ["Edward Cullen", "Jacob Black", "Bella Swan" ];
// var studentsObtainedMarks = [400, 380, 490];
// var percentageOfEdwrd = studentsObtainedMarks[0]/totalMarks*100 + " %";
// var percentageOfJacob = studentsObtainedMarks[1]/totalMarks*100 + " %";
// var percentageOfBella = studentsObtainedMarks[2]/totalMarks*100 + " %";
// var message = "The score of " + studentsName[0] + " is " + studentsObtainedMarks[0] + ". percentage : " +
// percentageOfEdwrd + "<br><br>";
// document.write(message);
// message = "The score of " + studentsName[1] + " is " + studentsObtainedMarks[1] + ". percentage : " +
// percentageOfJacob + "<br><br>";
// document.write(message);
// message = "The score of " + studentsName[2] + " is " + studentsObtainedMarks[2] + ". percentage : " +
// percentageOfBella + "<br><br>";
// document.write(message);

// question9a
// var colors = ["Red", "Green", "blue", "yellow", "White", "Pink", "Sky Blue", "Purple", "Black", "Brown", "Orange"];
// document.write("<h1>Color Names</h1>");
// document.write("<br> <br>" + colors[0] + "<br> <br>");
// document.write("<br> <br>" + colors[1] + "<br> <br>");
// document.write("<br> <br>" + colors[2] + "<br> <br>");
// document.write("<br> <br>" + colors[3] + "<br> <br>");
// document.write("<br> <br>" + colors[4] + "<br> <br>");
// document.write("<br> <br>" + colors[5] + "<br> <br>");
// document.write("<br> <br>" + colors[6] + "<br> <br>");
// document.write("<br> <br>" + colors[7] + "<br> <br>");
// document.write("<br> <br>" + colors[8] + "<br> <br>");
// document.write("<br> <br>" + colors[9] + "<br> <br>");
// document.write("<br> <br>" + colors[10] + "<br> <br>");


// question9b
// var userColor = prompt("Enter color name!!", "red");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];
// var index = 0;

// for (var i = 0; i <= colors.length; i++){
//   if (userColor === colors[i]) {
// //    var index = i;
//    break;
//   }
 
// }
// alert("index of color is :"+i);
// colors.unshift(colors[i])
// colors.splice(++i, 1);
// alert(colors);



// question9c
// var userColor = prompt("Enter color name!!", "red");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];
// var index = 0;

// for (var i = 0; i <= colors.length; i++){
//   if (userColor === colors[i]) {
//    var index = i;
//    break;
//   }
 
// }
// alert("index of color is :"+i);
// colors.unshift(colors[i],)
// colors.splice(++i, 1);
// colors.unshift("violet", "gray");
// alert(colors);


// question9d
// var userColor = prompt("Enter color name!!", "red");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];
// var index = 0;

// for (var i = 0; i <= colors.length; i++){
//   if (userColor === colors[i]) {
//    var index = i;
//    break;
//   }
 
// }
// alert("index of color is :"+i);
// colors.unshift(colors[i],)
// colors.splice(++i, 1);
// colors.unshift("violet", "gray");(
// colors.shift();
// alert(colors);


// question9e
// var userColor = prompt("Enter color name!!", "red");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];
// var index = 0;

// for (var i = 0; i <= colors.length; i++){
//   if (userColor === colors[i]) {
//    var index = i;
//    break;
//   }
 
// }
// alert("index of color is :"+i);
// colors.unshift(colors[i],)
// colors.splice(++i, 1);
// colors.unshift("violet", "gray");(
// colors.shift();
// colors.pop();
// alert(colors);




// question9f
// var userIndex = +prompt("'Enter a number 0 to 10' i.e position of color", 0)
// var userColor = prompt("Enter color name!!", "red");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];

// for (var i = 0; i <= colors.length; i++){
//   if (userColor === colors[i]) {
//    var index = i;
//    break;
//   }
 
// }
// [colors[userIndex],colors[index]] = [colors[index],colors[userIndex]]; 
// alert(colors);




// question9g
// var userIndex = +prompt("'Enter a number 0 to 10' i.e position of color  enter numer between 0 to 10", 0)
// var NoOfDeletedcolors = +prompt("How many colors you wants to deletes!! enter numer between 1 to 11", "4");
// var colors = ["red","green", "blue", "yellow", "white", "pink", "sky blue", "purple", "black", "brown", "orange"];

// colors.splice(userIndex, NoOfDeletedcolors);
// alert(colors);


// question10
// var score = ['200', '100', '330', '400', '480', '50'];
// score.sort(function(a, b){return a - b});
// alert(score);
// score.sort(function(a, b){return b - a});
// alert(score);

// qustion 11

// var cities = ["berlin", "nairobi", "helsinki", "denver", "tokyo", "rio", "palermo"];
// var selectedcities= cities.slice(3, 6);
// alert(selectedcities);


// question12

// var will = ["Insha'Allah", "I'll", "be", "a", "great", "fullstack", "developer"]
// var sentence = will.join(" ");
// alert(sentence);


// question13
// var costumerNames = [];
// var lengthOfArray = +prompt("How many element you want to insert in Array. note!! (1 to 10) is limit");
// for (var loopLimit = 1; loopLimit <= lengthOfArray; loopLimit++) {
//     var userInput = prompt("enter city name");
//     costumerNames.push(userInput);
// }

// alert(costumerNames);
// var lengthOfDeletedArray = +prompt("How many elements you want to delete from list ??" + " note limit is 0 to " +lengthOfArray);
// for (var loopLimit = 1; loopLimit <= lengthOfDeletedArray; loopLimit++) {
//     costumerNames.shift();
// }
// if (costumerNames.shift() === undefined) {
//     alert("you deleted whole list");
// }
// else {
//     alert(costumerNames);
// }




// question14
// var costumerNames = [];
// var lengthOfArray = +prompt("How many element you want to insert in Array. note!! (1 to 10) is limit");
// for (var loopLimit = 1; loopLimit <= lengthOfArray; loopLimit++) {
//     var userInput = prompt("enter city name");
//     costumerNames.push(userInput);
// }

// alert(costumerNames);
// var lengthOfDeletedArray = +prompt("How many elements you want to delete from list ??" + " note limit is 0 to " +lengthOfArray);
// for (var loopLimit = 1; loopLimit <= lengthOfDeletedArray; loopLimit++) {
//     alert(costumerNames.pop());


// chapter 17 - 20


// var students = [[],[],[]];
// var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]


// document.write(matrix[0][0], matrix[0][1], matrix[0][2], matrix[0][3]+ "<br></br>");

// document.write(matrix[1][0], matrix[1][1], matrix[1][2], matrix[1][3]+ "<br></br>");
// document.write(matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][3]+ "<br></br>");


// var num = 1;
// for (var i = 0; i <= 9; i++) {
//     document.write(num++)
// }


// question4
// var tableOf = +prompt("Enter a number for multiplication table");
// var lengthOfTable = +prompt("Enter the length of multiplication table");
// var startOfTable = 0;
// for (var i = 1; i <= lengthOfTable; i++) {
//     var answer = tableOf*(++startOfTable);
//     document.write(tableOf+" "+" x "+i + " = "  + answer +" "+ "<br>")
// }



// question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i <= fruits.length; i++){
//     document.write("Element at index at " + i + " "+ fruits[i]  + "<br></br>");
// }

// question 6
// for (var i = 0; 1 <= 14; i++ ) {
//     document.write(++i);
// }


// var limit = 15;
// document.write("counting ");
// for (i = 1; i <= limit; i++) {
//     document.write(i+",")
// }
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("reverse counting ");
// var limit = 15;
// for (i = limit; i >= 1; i--) {
//     document.write(i+",")
// }
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("odd series ");
// var limit = 15;
// for (i = 0; i <= limit; i++) {
//     console.log(i)
//     document.write(++i+",")
// }
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Even series ");

// var limit = 15;
// for (i = 0; i <= limit; i++) {
//     document.write(i+++",")
// }

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("series ");

// var limit = 15;
// for (i = 2; i <= limit; i++) {
//     document.write(i+++"k,")
// }


// question7
// var flag=false;
// var listOfItems = ["cake", "apple pie", "Cookie", "chips", "patties" ];
// // alert("Attention!! We usally have cake, apple pie, Cookie, chips, patties");
// var userinput = prompt("What do you wanna have??", "apple pie");
// for (var i = 0; i <= listOfItems.length; i++) {
//     if (listOfItems[i] === userinput) {
//         alert("cookie is available at index " + i + " in our bakery");
//         flag=true;

//     } 
// }

// if (flag === false) {
//     alert("Not found");
// }


// question 8
// method 1
// const numbers = [5, 2, 9, 1, 7];
// let greatestNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > greatestNumber) {
//     greatestNumber = numbers[i];
//   }
// }
// console.log(greatestNumber);


// method 2
// var numlist = [];
// var i;
// var flag = false;
// var lengthOfArray = +prompt("How many number you want??", 2);
// for (i = 0; i < lengthOfArray; i++) {
// numlist.push(prompt("Enter number js will find the greatest number for you!!"));
// }
// var greatestNumber = numlist[0];
// for (i = 1; i < numlist.length; i++) {
//     if (numlist[i] > greatestNumber) {
//         greatestNumber = numlist[i];
//         flag = true;
//     } 
// }
// alert("Greatest is " + greatestNumber);
// if(greatestNumber === ""){
//     alert("you didn't enter any number")
//     flag = false;
// }


// question9

// var numbers = [];
// var i;
// var flag = false;
// var lengthOfArray = +prompt("How many numbers you want to enter ??", 3);
// for (i = 0; i < lengthOfArray; i++) {
//     numbers.push(+prompt("Enter the numbers!!"));
// }
// smallestNumber = numbers[0];
// console.log(smallestNumber)
// console.log(numbers);
// for (i = 1; i < lengthOfArray; i++) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//         flag = true;
//     }
// }
// alert(smallestNumber)
// if (smallestNumber === 0) {
//     alert("zero equals to zero");
//     flag = false;
// }


// question 10

// for (var i = 1; i <= 20; i++) {
// document.write(5*i+ " , ");
// }