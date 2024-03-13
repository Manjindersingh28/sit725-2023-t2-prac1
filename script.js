function changeText() {
    console.log('abcde');
    let potentialTexts =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let randomNumber = getRandomNumberBetween(0, potentialTexts.length - 1)
    let textToChangeTo = potentialTexts [randomNumber]
    document.getElementById("heading") .innerHTML = textToChangeTo;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}