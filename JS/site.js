// Get String From The Page
// controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("stringInput").value;

    let revString = reverseString(userString);

    displayString(revString);

    
    

}


// Write Function That Reverses The String
// logic function
function reverseString(userString) {

    let revString = [];

    // reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}



// Display The Message To The User
// view function
function displayString(revstring) {

    //write to page
    document.getElementById("message").innerHTML = `Your String Reversed Is: ${revstring}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}