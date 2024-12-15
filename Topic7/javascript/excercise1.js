
// Create an array of 10 commonly used first names
let names = [];

for(i = 0; i < 10; i++) {
    names.push(prompt("Enter a name:"));
}
// Sort the array into alphabetical order
names.sort();

// Output the sorted array in a browser display window
alert(names);