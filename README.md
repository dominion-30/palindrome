This file contain instruction on how to use the palindrome module. The palindrome module has sets of methods that would be useful in different scinarios

Note: This is the beta version 0.1.0 

Instructions for usage:
$ npm install --global ayo-palindrome
$vim test.js
let Phrase = require("ayo-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
