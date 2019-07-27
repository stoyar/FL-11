const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

console.log(document.location);

//rootNode.appendChild(/* Append your list item node*/);

// location.hash; --- get hash (#)

/* you may set each of this properties, like
location.href = 'http://google.com'; // redirect user browser to google.com
location.hash = '#11';
--- this event fire when hash was changed
window.addEventListener('hashchange', function(e) {
  console.log(e.oldURL + ' -> ' + e.newURL);
});
*/

