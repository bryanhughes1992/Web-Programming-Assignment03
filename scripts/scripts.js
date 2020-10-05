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
//While 'gandalf' is equal to null, YOU SHALL NOT PASS!
while (!gandalf) {
    //Prompt the user to enter a number between 1 and 10
    //Parse the user's input to an int
    var userInput = parseInt(prompt("Which top 10 book would you like?", "Pick a number: 1-10"));
    //IF userInput is between 1 and 10
    if (userInput >= 1 && userInput <= 10) {
        //Loop through the array of books
        bookArray.forEach(book => {
            //IF userInput - 1 is equal to the index of 'book' in 'bookArray'
            if (userInput - 1 === bookArray.indexOf(book)) {
                //create a variable equal to the book found
                var position = book;
                //tell the user the book they selected
                alert(`Number ${userInput} on the list is ${position}`);
            }
        });
        //set gandalf to userInput, you shall pass
        gandalf = userInput;
    //ELSE IF userInput isn't a number, or less than 1 or greater than 10
    } else if (isNaN(userInput) || userInput < 1 || userInput > 10 || userInput === "Pick a number: 1-10") {
        alert("Please enter a number between 1 and 10!");
    }
}
