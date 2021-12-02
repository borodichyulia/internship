.idea// 1
function changeRegister(word) {
    if (typeof word === 'string') {
        let newWord = word.toLowerCase();
        let firstLetter = newWord[0].toUpperCase();
        alert(firstLetter + newWord.slice(1, newWord.length));
    } else {
        alert('Incorrect type. Expect string.');
    }
}

changeRegister('пИтЕр');