// 2
function sayHello(name) {
    if (typeof name === 'string') {
        let endOfHello = ', ' + name + '!';
        let startOfHello = name !== 'Mark' ? 'Hello' : 'Hi';
        alert(startOfHello + endOfHello);
    } else {
        alert('I// 2
function sayHello(name) {
    if (typeof name === 'string') {
        let endOfHello = ', ' + name + '!';
        let startOfHello = name !== 'Mark' ? 'Hello' : 'Hi';
        alert(startOfHello + endOfHello);
    } else {
        alert('Incorrect type. Expect string.');
    }
}

sayHello('Liza');
sayHello('Mark');