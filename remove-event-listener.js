var element = document.getElementById('myElementId');
var listener = function (event) {
  console.log('clicked!')
};
element.addEventListener('click', listener, false);
element.removeEventListener('click', listener, false); // Like a off() jQuery
