"use strict";
const text = "This is a test sentence with some bad words.";
const forbiddenWords = ["bad", "test"];
function highlightForbiddenWords(text, wordsArray) {
    const textArr = text.split(' ');
    return textArr.map(item => wordsArray.includes(item) ? `<del>${item}</del>` : item).join(' ');
}
function highlightForbiddenWords2(wordsArray) {
    const element = document.querySelector('[data-sentence]');
    if (!element) {
        console.error("Елемент з data-sentence не знайдено.");
        return;
    }
    const text = element.innerHTML;
    const textArr = text.split(' ');
    element.innerHTML =
        textArr.map(item => wordsArray.includes(item) ? `<del>${item}</del>` : item).join(' ');
}
// const result = highlightForbiddenWords(text, forbiddenWords);
// console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."
// console.log(document.querySelector('[data-sentence]').innerHTML)
function clickHandler(e) {
    const { target } = e;
    if (!(target instanceof HTMLElement)) {
        console.error('Error');
        return;
    }
    else if (target.hasAttribute('data-btn1')) {
        highlightForbiddenWords2(forbiddenWords);
    }
    else if (target.hasAttribute('data-btn2')) {
        const element = document.querySelector('[data-sentence]');
        if (!element) {
            console.error('Елемент не знайдено');
            return;
        }
        element.innerHTML = text;
    }
}
document.body.addEventListener("click", clickHandler);
