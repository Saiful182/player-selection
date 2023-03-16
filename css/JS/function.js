function selectedPlayers(string) {

    const element = document.getElementById('orderded-list');

    const inputVariable = document.createElement('li');
    const text = document.createTextNode(string);
    inputVariable.appendChild(text);
    element.appendChild(inputVariable);

}

document.getElementById('messi-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.children.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('messi').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('messi-button').style.display = "none";
    }

})
document.getElementById('dmaria-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('dmaria').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('dmaria-button').style.display = "none";
    }
})
document.getElementById('donrumma-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('donnoromma').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('donrumma-button').style.display = "none";
    }
})
document.getElementById('ibra-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('ibra').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('ibra-button').style.display = "none";
    }
})
document.getElementById('hakimi-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('hakimi').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('hakimi-button').style.display = "none";
    }
})
document.getElementById('navas-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('navas').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('navas-button').style.display = "none";
    }
})
document.getElementById('ramos-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('ramos').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('ramos-button').style.display = "none";
    }
})
document.getElementById('neymar-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('neymar').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('neymar-button').style.display = "none";
    }
})
document.getElementById('mbappe-button').addEventListener('click', function () {
    const element = document.getElementById('orderded-list');
    console.log(element.childNodes.length);
    if (element.childNodes.length === 6) {
        alert('Maximum Number Of Player Added')
    }
    else {
        const getPlayerNameString = document.getElementById('mbappe').innerText;
        selectedPlayers(getPlayerNameString);
        document.getElementById('mbappe-button').style.display = "none";
    }
})