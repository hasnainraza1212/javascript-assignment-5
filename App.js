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
//    var index = i;
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

// }

// question 15



