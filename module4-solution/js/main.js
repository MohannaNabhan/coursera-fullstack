// Sample array of names
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Function to determine greeting based on the first letter of the name
function determineGreeting(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Function to process names and print greetings
function processNames(namesArray) {
    for (let i = 0; i < namesArray.length; i++) {
        // Call the determineGreeting function for each name
        const greeting = determineGreeting(namesArray[i]);

        // Print the greeting to the console
        console.log(greeting);
    }
}

// Call the processNames function with the provided array of names
processNames(names);
