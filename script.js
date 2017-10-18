const ul = document.getElementById('coins');
const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';


function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (data) {
        // Your code for handling the data you get from the API
        listCoins(data);

        for (x = 0; x < data.length; x++) {
            displayCoin(data, x);
            document.write('<br>');
        }
    })
    .catch(function () {
        // This is where you run code if the server returns any errors
    });

function listCoins(data) {
    for (x = 0; x < data.length; x++) {
        console.log(data[x].name);
    }
}

function getCoinData(data, coin) {

}

function displayCoin(data, coin) {
    var name = data[coin].name;
    var symbol = data[coin].symbol;
    var price_usd = data[coin].price_usd;
    var percent_change_24h = data[coin].percent_change_24h;
    document.write(data[coin].name + " (" + data[coin].symbol + ")");
    document.write('<br>')
    document.write("$" + data[coin].price_usd);
    document.write('<br>')
    document.write(data[coin].percent_change_24h+"%");
    document.write('<br>')

    var elname = document.createElement('li');
    var elsymbol = document.createElement('p');
    var elprice = document.createElement('p');
    var elchange = document.createElement('p');

    elname.innerHTML = data[coin].name;
    append(ul,elname);
    // document.getElementById("name").innerHTML = data[coin].name;
    // document.getElementById("symbol").innerHTML = data[coin].symbol;
    // document.getElementById("price_usd").innerHTML = data[coin].price_usd;
    // document.getElementById("percent_change_24h").innerHTML = data[coin].percent_change_24h;
}

function dCoin(data) {
    for (x = 0; x < data.length; x++) {
        console.log(data.length);
        let li = createNode('li'),
            name = createNode('span'),
            price_usd = createNode('span');
        console.log(data.length);
        name.innerHTML = data[x].name;
        price_usd.innerHTML = data[x].price_usd;
        console.log(data.length);
        append(li, name); // Append all our elements
        console.log(data.length);
        console.log(data.length);
        append(ul, li);

        console.log(data.length);
    }
}