// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var output = [];

  var search = function (element) {
    if (element.classList && element.classList.contains(className)) {
      output.push(element);
    }
    if (element.hasChildNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        search(element.childNodes[i]);
      }
    }
  };

  search(body);
  return output;
};
