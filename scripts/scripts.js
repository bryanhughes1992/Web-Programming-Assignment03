//BOOK #1
var bookOne = "#1 Holy Bible - King James Version";
//BOOK #2
var bookTwo = "#2 The Republic - Plato";
//BOOK #3
var bookThree = "#3 Being and Time - Martin Heidegger";
//BOOK #4
var bookFour = "#4 Das Kapital - Karl Marx";
//BOOK #5
var bookFive = "#5 القرآن الكريم - Anonymous";
//BOOK #6
var bookSix = "#6 Critique of Pure Reason - Immanuel Kant";
//BOOK #7
var bookSeven = "#7 The Origin of Species - Charles Darwin";
//BOOK #8
var bookEight = "#8 1984 - George Orwell";
//BOOK #9
var bookNine = "#9 Steppenwolf - Hermann Hesse";
//BOOK #10
var bookTen = "#10 Faust, First Part - Johann Wolfgang von Goethe";
//Array of Top Ten Most Influential Books to Mankind
var bookArray = [
    bookOne,
    bookTwo,
    bookThree,
    bookFour,
    bookFive,
    bookSix,
    bookSeven,
    bookEight,
    bookNine,
    bookTen
];
//INITIALIZING 'gandalf' TO NULL
var gandalf = null;
//WHILE gandalf IS NULL - YOU SHALL NOT PASS!
while (!gandalf) {
    //PROMPT USER TO ENTER NUMBER BETWEEN 1 AND 10
    //PARSE THEIR INPUT TO AND INTEGER
    var userInput = parseInt(prompt("Which top 10 book would you like?", "Pick a number: 1-10"));
    //IF USER INPUT IS BETWEEN 1 AND 10
    //SET GANDALF TO USER INPUT TO END LOOP
    if (userInput >= 1 && userInput <= 10) {
        alert(userInput);
        gandalf = userInput;
    }

}
