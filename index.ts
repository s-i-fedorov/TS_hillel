const text:string = "This is a test sentence with some bad words.";
const forbiddenWords:string[] = ["bad", "test"];

function highlightForbiddenWords (text:string, wordsArray:string[]){
    const textArr = text.split(' ')
    return textArr.map(item => wordsArray.includes(item)?`<del>${item}</del>`:item).join(' ')
}
function highlightForbiddenWords2 (){
    const wordsArray:string[] = forbiddenWords
    const text:string = document.querySelector('[data-sentence]').innerHTML
    const textArr:string[] = text.split(' ')
    document.querySelector('[data-sentence]').innerHTML =
        textArr.map(item => wordsArray.includes(item)?`<del>${item}</del>`:item).join(' ')
}

// const result = highlightForbiddenWords(text, forbiddenWords);
// console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."
// console.log(document.querySelector('[data-sentence]').innerHTML)
function clickHandler(e){
    const {target} = e;
    if (target.hasAttribute('data-btn1')) {
        highlightForbiddenWords2()
    }
    else if (target.hasAttribute('data-btn2')) {
        document.querySelector('[data-sentence]').innerHTML = text
    }
}
document.body.addEventListener("click", clickHandler)
