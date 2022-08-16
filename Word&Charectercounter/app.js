let charecter = document.getElementById('char');
let word = document.getElementById('word');

function callFun() {
    //For counting charecter.
    let text = document.getElementById('text').value.length;
    charecter.innerHTML = text;

    //For counting words
    let now = document.getElementById('text').value;
    now = now.match(/\w+/g);
    word.innerHTML = now.length;

}