function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data;
  return authors.map(function(author) {
    let li = createNode('li'),
        span = createNode('span');
    span.innerHTML = author[0].name;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});   