let name = window.prompt("What is your name?");

if (name.length > 15){
    window.alert("Illegal name");
} else{
    window.alert("Welcome " + name);
}
