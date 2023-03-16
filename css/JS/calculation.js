function getInputValue(inputId) {
    const inputValueString = document.getElementById(inputId);
    const inputDigits = parseInt(inputValueString.value);
    return inputDigits;
}
function getInnerTextValue(inputId) {
    const innetTextString = document.getElementById(inputId);
    const innerTextDigits = parseInt(innetTextString.innerText);
    return innerTextDigits;
}

document.getElementById('calculte-button').addEventListener('click', function () {
    const numberOfSelectedPlayers = document.getElementById('orderded-list').children.length;
    const playerCost = getInputValue('per-player-cost');
    if (isNaN(playerCost)) {
        alert('Please Input a valid Number');
        document.getElementById('per-player-cost').value = '';
    }
    else {
        const totatPlayerCost = numberOfSelectedPlayers * playerCost;
        document.getElementById('player-expences').innerText = totatPlayerCost;
        document.getElementById('per-player-cost').value = '';
    }

})
document.getElementById('calculate-total-button').addEventListener('click', function () {
    const totalPlayerExpence = getInnerTextValue('player-expences');
    const managerExpence = getInputValue('manager');
    const coachExpence = getInputValue('coach');
    console.log(totalPlayerExpence, managerExpence, coachExpence);
    const totalCosting = totalPlayerExpence + managerExpence + coachExpence;
    document.getElementById('total').innerText = parseFloat(totalCosting);
})