function getInputValue(inputId) {
    const inputValueString = document.getElementById(inputId);
    const inputValue = inputValueString.value;
    const inputDigits = parseFloat(inputValue);
    return inputDigits.toFixed(2);
}

document.getElementById('calculte-button').addEventListener('click', function () {
    const numberOfSelectedPlayers = document.getElementById('orderded-list').children.length;
    const playerCost = getInputValue('per-player-cost');
    if (isNaN(playerCost)) {
        alert('Please Input a valid Number');
        document.getElementById('per-player-cost').value = '';
    }
    else {

    }

})