// Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number to print. Create a switch case that prints 1 if you enter 1, 2 if you enter 2,
// 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
//
let userInput = prompt("Please enter a number to print from 1 to 5.")
switch (userInput) {
    case "1":
        alert("1");
        break;
    case "2":
        alert("2");
        break;
    case "3":
        alert("3");
        break;
    case "4":
        alert("4");
        break;
    case "5":
        alert("5");
        break;
    default:
        alert("Number not included in choices!");
}
//Problem 2:
//Put the start of your program in a main function. Ask the user to enter a 3 digit binary number.
//Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100,
//and 5 if you enter 101.
//
let userInput2 = prompt("Please enter a number from 1 to 5");
// Ask the user to enter a 3 digit binary number.
switch(userInput2){
    case "1":
        alert("1");
        break;
    case "2":
    // prints 2 if the user enters 10 NOT prints 10 if the user enters 2
        alert("10");
        break;
    case "3":
        alert("11");
        break;
    case"4":
        alert("100");
        break;
    case"5":
        alert("101");
        break;
    default:
        alert("Number is not included in choices");
}
//Problem 3:
//Put the start of your program in a main function. Create an attendance array.
//Ask the user if a teacher, student, or parent is checking in.
//Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose.
//Repeat this five times.
//
//Challenge: Do the above program until the user enter's 'q'. Also, print and add to the array via a function call to the appropriate teacher/student/parent function.