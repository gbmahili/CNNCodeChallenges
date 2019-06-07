/**
 * Capitalize each letter in a sentence and put space after each punctuation
 */

 // Use the node module file system and read the file
const fs = require('fs');
const sentence = fs.readFileSync('sentence.txt', 'utf8');
const sentence2 = fs.readFileSync('paragraphs.txt', 'utf8');

// PRETTIFY FUNCTION
const prettify = str => {
    // Capitalize first letter of each sentence
    str = str.split('.').map(e => e ? `${e[0].toUpperCase()}${e.substr(1)}` : '').join('.');
    // List of test punctuations
    const punctuations = [",", ";", ":", "."];
    // Replace each found punctuation with that punctuation and a space
    punctuations.forEach(e => {
        str = str.replace(new RegExp(`\\${e}`, "g"), `${e} `);
    });
    return str;
}

// PRETTIFY OR UGGLIFY FUNCTION

/**
 * # Prettify: Capitalize each letter in a sentence and put space after each punctuation or
 * # Ugglify: Make all first letters lower case and remove spaces after each punctuation
 * @param {String} str String or sentence to prettify
 * @param {String} a Action to do, pass in 'p' to prettify the sentence by capitalizing each letter of the sentence
 */
const prettifyOrUgglify = (str, a) => {
    // Capitalize first letter of each sentence
    str = str.replace(/\. /g, '.');
    str = str.split('.').map(e => e ? `${!a=='p'?e[0].toUpperCase():e[0].toLowerCase()}${e.substr(1)}` : '').join('.');
    // List of test punctuations
    const punctuations = [",", ";", ":", "."];
    // Replace each found punctuation with that punctuation and a space
    punctuations.forEach(e => {
        str = str.replace(new RegExp(`\\${e} `, "g"), a=='p'? `${e} `:`${e}`);
    });
    return str;
}

// TESTING CODE AND TIMESTAMP
var start = new Date().getTime();
//console.log(prettify(sentence));
console.log(prettifyOrUgglify(sentence2, 'p'));
var end = new Date().getTime();
var time = end - start;
console.log(`Execution time: ${time} milliseconds`);
