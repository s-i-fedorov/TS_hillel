const text = "This is a test sentence with some bad words.";
const forbiddenWords = ["bad", "test"];
// const result = highlightForbiddenWords(text, forbiddenWords);
// console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."

function highlightForbiddenWords (text, wordsArray){
    return text.split(' ')
}

console.log(highlightForbiddenWords(text))