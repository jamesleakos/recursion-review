// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// { x: 5 } --> '{"x":5}'
// [NaN, null, Infinity] --> '[null,null,null]'

var stringifyJSON = function(obj) {
  var type = typeof obj;

  if (type === 'string') {
    return '\"' + obj + '\"';
  }

  if (type === 'number' || type === 'boolean') {
    return '' + obj;
  }

  if (obj === null || Number.isNaN(obj)) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    var output = '[';
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'function' || obj[i] === undefined) {
        output += 'null';
      }
      output += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        output += ',';
      }
    }
    output += ']';
    return output;
  }

  if (type === 'object') {
    var output = '{';
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      output += stringifyJSON(key);
      output += ':';
      output += stringifyJSON(obj[key]);
      output += ',';
    }
    if (output.length > 1) {
      output = output.slice(0, output.length - 1);
    }
    output += '}';
    return output;
  }
};
