// 3
function filterString(arrStrings, length) {
    let arrFilter = arrStrings
        .filter(s => typeof s === 'string')
        .filter(s => s.length <= length);
    alert(arrFilter);
}

filterString(['Hello', 3, true, 'cake', 'cat'], 4);                                                                                           // 3
function filterString(arrStrings, length) {
    let arrFilter = arrStrings
        .filter(s => typeof s === 'string')
        .filter(s => s.length <= length);
    alert(arrFilter);
}

filterString(['Hello', 3, true, 'cake', 'cat'], 4);