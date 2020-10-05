// ASSIGNMENT 03 - Bryan Hughes - Student #N00481777

//BOOK #1
var bookOne = "Holy Bible - King James Version";
//BOOK #2
var bookTwo = "The Republic - Plato";
//BOOK #3
var bookThree = "Being and Time - Martin Heidegger";
//BOOK #4
var bookFour = "Das Kapital - Karl Marx";
//BOOK #5
var bookFive = "القرآن الكريم - Anonymous";
//BOOK #6
var bookSix = "Critique of Pure Reason - Immanuel Kant";
//BOOK #7
var bookSeven = "The Origin of Species - Charles Darwin";
//BOOK #8
var bookEight = "1984 - George Orwell";
//BOOK #9
var bookNine = "Steppenwolf - Hermann Hesse";
//BOOK #10
var bookTen = "Faust, First Part - Johann Wolfgang von Goethe";
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
//initializing a gate-keeper variable 'gandalf' to null
var gandalf = null;
//while 'gandalf' has no value, YOU SHALL NOT PASS!
while (!gandalf) {
    //Prompt user to input number between 1 and 10 / Parse inputted value to an int
    var userInput = parseInt(prompt("Which top 10 book would you like?", "Pick a number: 1-10"));
    //IF userInput is between 1 and 10
    if (userInput >= 1 && userInput <= 10) {
        //Loop through the array of books
        bookArray.forEach(book => {
            //IF the userInput minus 1 is equal to the index of 'book' in 'bookArray'
            if (userInput - 1 === bookArray.indexOf(book)) {
                //create a variable equal to the book found in the bookArray
                var position = book;
                //tell the user the book they selected
                alert(`The number ${userInput} most influential book to humanity is "${position}"`);
            }
            //Log the index plus 1 of each book, plus the title of each book to the console
            console.log(`Book ${bookArray.indexOf(book) + 1} - ${book}`);
        });
        //set gandalf's value to userInput's value, YOU SHALL NOW PASS!
        gandalf = userInput;
    //ELSE IF userInput isn't a number, or less than 1 or greater than 10
    } else if (isNaN(userInput) || userInput < 1 || userInput > 10 || userInput === "Pick a number: 1-10") {
        //THEN Tell user to re-enter a proper number
        alert("Please enter a number between 1 and 10!");
    }
}

/*NOTE: I had a lot of fun writing this assignment. It was challenging, but I think what
I wrote is a good answer. Very interested in ways I could have written this better.*/
