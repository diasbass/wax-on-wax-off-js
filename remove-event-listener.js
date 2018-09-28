var elemento = document.getElementById('search-field');
var listener = function (event) {
  console.log('clicked!')
};
elemento.addEventListener('click', listener, false);
elemento.removeEventListener('click', listener, false); // Like a off() jQuery
