 let Phrase = require("ayo_palindrome");
function palindromeTester(event){
    event.preventDefault();

   

    // let string = prompt("Please enter a string for palindrome testing:", "Enter string");
    // alert(new Phrase("Madam, I'm Adam.").palindrome());

    let user_string = new Phrase(event.target.user_string.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if(user_string.palindrome()){
        
        palindromeResult.innerHTML = `<strong>"${user_string.content}"</strong> is a palindrome!`;
        
            // alert(`"${user_string.content}" is a palindrome`);
        }
    else{
        palindromeResult.innerHTML = `<strong>"${user_string.content}"</strong> is not a palindrome.`;
    // alert(`"${user_string.content}" is not a palindrome`);
     }


}
document.addEventListener("DOMContentLoaded", function(){

    let tester = document.querySelector("#palindromeTester");
   

//     button.addEventListener("click", function(){
//     palindromeTester();
// }

// );
tester.addEventListener("submit", function(event){
    palindromeTester(event);
})
})


