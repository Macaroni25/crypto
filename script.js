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
        //listCoins(data);

      //  document.body.appendChild(buildHtmlTable(data));
        coinTable(data);
       
        //c1(data);
    })
    .catch(function () {
        // This is where you run code if the server returns any errors
    });

function listCoins(data) {
    for (x = 0; x < data.length; x++) {
        console.log(data[x].name);
    }
}


function c1(data){
    var c = document.getElementById("coinDataDisplay")
    data.forEach(function(coin) {
        var d = document.createElement('div');
        d.className = "coinDiv";
        d.id = coin.id;
        c.appendChild(d);
        // if(coin.percent_change_24h < 0){
        //     d.style.background = "#f99a9a";
        // }
       var coinName = document.createElement('p');
       coinName.className = "coinName";
       coinName.innerHTML = coin.name + " (" + coin.symbol + ")";
       d.appendChild(coinName);

       var coinPrice = document.createElement('p');
       coinPrice.className = "coinPrice";
       coinPrice.innerHTML = "$" + coin.price_usd;
       d.appendChild(coinPrice);

       var coinChange = document.createElement('p');
       coinChange.className = "coinChange";
       coinChange.innerHTML = coin.percent_change_24h + "%";
       d.appendChild(coinChange);
       if(coin.percent_change_24h < 0){
           coinChange.id="negative";
       }else{
           coinChange.id="positive";
       }

    }, this);
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
    document.write(data[coin].percent_change_24h + "%");
    document.write('<br>')

    // document.getElementById("name").innerHTML = data[coin].name;
    // document.getElementById("symbol").innerHTML = data[coin].symbol;
    // document.getElementById("price_usd").innerHTML = data[coin].price_usd;
    // document.getElementById("percent_change_24h").innerHTML = data[coin].percent_change_24h;
}


function coinTable(data, coins){
    var json = data,
    table = createNode('table');

    var headerRow = createNode('tr'),
    th;

   
        th = document.createElement('th');
        th.appendChild(document.createTextNode("NAME"));
        headerRow.appendChild(th);

        th = document.createElement('th');
        th.appendChild(document.createTextNode("PRICE"));
        headerRow.appendChild(th);

        th = document.createElement('th');
        th.appendChild(document.createTextNode("% CHANGE"));
        headerRow.appendChild(th);
    

table.appendChild(headerRow);

for(var i = 0, il = json.length; i < il; ++i) {
    //create row
    var row = document.createElement('tr'),
        td;

    //create the id column
    td = document.createElement('td');
    td.appendChild(document.createTextNode(json[i].name));
    row.appendChild(td);

    //create name column
    td = document.createElement('td');
    td.appendChild(document.createTextNode(json[i].price_usd));
    row.appendChild(td);

    //create price column
    td = document.createElement('td');
    td.appendChild(document.createTextNode(json[i].percent_change_24h));
    row.appendChild(td);

    table.appendChild(row);
}

document.body.appendChild(table);
}



