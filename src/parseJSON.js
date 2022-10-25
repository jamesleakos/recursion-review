// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var chars = json.split('');
  if (char[0] === '"') {
    chars.pop();
    return chars.join('');
  }

  if (char[0] === 't') {
    return true;
  } else if (char[0] === 'f') {
    return false;
  }

  if (Number.isNaN(parseInt(char[0]))) {
    return parseFloat(chars.join(''));
  }

  if (char[0] === '[') {
    var outputArray = [];
    chars = chars.slice(1, char.length - 1);

  }

};



