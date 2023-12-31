function calculateWeed() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    const stashprice = parseFloat(document.getElementById('stashprice').value);
    const stashamount = parseFloat(document.getElementById('stashamount').value);

    let weed = (stashamount / stashprice) * dollars;
    let resultElement = document.getElementById('result');

    if (weed > stashamount || isNaN(weed)) {
        resultElement.innerHTML = 'Error';
    } else if (weed > 0) {
        resultElement.innerHTML = `Calculating weed amount...<br>${dollars} dollars will buy you ${weed.toFixed(2)} grams.<br>Happy Smoking!`;
    } else {
        resultElement.innerHTML = 'Error';
    }
}