(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"ayo_palindrome":2}],2:[function(require,module,exports){

module.exports = Phrase;

String.prototype.reverse = function(){
    // return this;
   
    return Array.from(this).reverse().join("");
}

// function palindrome(string){
//     let convertedString = string.toLowerCase();
//     // return convertedString;
//     return convertedString === reverse(convertedString);

// }

function Phrase(content){
    this.content = content;

    this.processedContent = function processedContent(){
        // // return this.content;
        return this.letters().toLowerCase();

    }

     this.louder = function louder(){
        let volume = this.content.toUpperCase();
        return volume;
    }



    this.palindrome = function palindrome(){
    // let convertedString = this.content.toLowerCase();
    // return convertedString;
    // return convertedString === reverse(convertedString);
    return this.processedContent() === this.processedContent().reverse();


   
}
this.letters = function letters(){
    return (this.content.match(/[a-z]/gi) || []).join("");
// const letterRegex = /[a-z]/i; 
// let L = [];
//     Array.from(this.content).forEach(function(character){
//         // let character =  this.content.charAt(i) 
//         if(character.match(letterRegex)){
//             L.push(character);
//         }
       
//     })
//     return L.join("");
}
   
}


let say = new Phrase("Madam, I'm Adam.");
console.log(say.letters());


String.prototype.blank = function(){
    if(this.length === 0){
        return true;
    }
    else if((/\s+/)){
         return "White space"
     }
    else{
        return false;
    }
}
let s = " ";
console.log(s.blank());

Array.prototype.lastElement = function(){
    return this[this.length-1];
}

a = [1,2,"g", 5];
console.log(a.lastElement());
// palindrome("To be or not to be");
// palindrome("level");

// palindrome("This is a dog 🐶");
// reverse("This is a dog 🐶");



// phrase = new Phrase("Racecar");
// let p = new Phrase("yo adrian!")
// // console.log(phrase.palindrome());
// console.log(p.louder());


// function TranslatedPhrase(content, translation){
//     this.content = content;
//     this.translation = translation;
   
//      this.processedContent = function processedContent(){
//         return this.translation.toLowerCase();
//     }
// }

// TranslatedPhrase.prototype = new Phrase();

// let translatedPhrase = new TranslatedPhrase("Hi", "Hej");
// let frase = new TranslatedPhrase("recognize", "reconocer");
// // console.log(translatedPhrase.processedContent());
// console.log(translatedPhrase.palindrome());
// console.log(frase.palindrome());



//Exercise
// Reverses a string
// function reverse(string){
//     return Array.from(string).reverse().join("");
// }

// function Phrase(content){
//     this.content = content;

//     this.processor = function(string){
        
//         return string.toLowerCase();

//     }

//     this.processedContent = function processedContent(){
//         return this.processor(this.content);
//     }

//     // Returns true if the phrase is a palindrome, false otherwise.

//     this.palindrome = function palindrome(){
//         return this.processedContent() === reverse(this.processedContent());
//     }
// }

// function TranslatedPhrase(content, translation){
//     this.content = content;
//     this.translation = translation;

//     // Returns translation processed for palindrome testing.

//     this.processedContent = function processedContent(){
//         return this.processor(this.translation);
//     }
// }

// let newPhrase = new TranslatedPhrase("Hi", "Hej");
// let wordChecker = new Phrase("Complete");
// console.log(wordChecker.processor("COMPLETE"))
// console.log(newPhrase.palindrome());

},{}]},{},[1]);
