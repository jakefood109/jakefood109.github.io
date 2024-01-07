function calculateWeed() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    const stashprice = parseFloat(document.getElementById('stashprice').value);
    const stashamount = parseFloat(document.getElementById('stashamount').value);
    const expectedProfit = parseFloat(document.getElementById('profit').value) || 0;

    let weed = (stashamount / stashprice) * dollars - (expectedProfit * (stashamount / stashprice));
    let resultElement = document.getElementById('result');

    if (weed > stashamount || isNaN(weed)) {
        resultElement.innerHTML = 'Error';
    } else if (weed > 0) {
        resultElement.innerHTML = `${dollars} dollars will buy you ${weed.toFixed(2)} grams.`;
    } else {
        resultElement.innerHTML = 'Error';
    }
}
