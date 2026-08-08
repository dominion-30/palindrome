
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
    if(this.letters()){
         return this.processedContent() === this.processedContent().reverse();
    }
    else{
        return false;
    }

   
    }
    this.letters = function letters(){
     const letterRegex = /[a-z]/gi; 
    // return (this.content.match(/[a-z]/gi).join(""));
    //  return (this.content.match(/[a-z]/gi) || []).join("");
    return (this.content.match(letterRegex) || []).join("");

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


let say = new Phrase("");
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


let y = new Phrase("car");
console.log(y.palindrome());
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
