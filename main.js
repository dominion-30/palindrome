let Phrase = require("ayo_palindrome");

let string = prompt("Please enter a string for palindrome testing:", "Enter string");
// alert(new Phrase("Madam, I'm Adam.").palindrome());

let user_string = new Phrase(string);

if(user_string.palindrome()){
    alert(`"${user_string.content}" is a palindrome`);
}
else{
    alert(`"${user_string.content}" is not a palindrome`);
}
