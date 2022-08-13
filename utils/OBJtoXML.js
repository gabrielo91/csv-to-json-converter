const libraryParser = require('jstoxml');

function OBJtoXML(obj) {
  var xml = '';
  for (var prop in obj) {
    const parsedProp = prop.replaceAll(' ', '_').replaceAll('#', '_Number');
    xml += obj[prop] instanceof Array ? '' : '<' + parsedProp + '>';
    if (obj[prop] instanceof Array) {
      for (var array in obj[prop]) {
        xml += '<' + parsedProp + '>';
        xml += OBJtoXML(new Object(obj[prop][array]));
        xml += '</' + parsedProp + '>';
      }
    } else if (typeof obj[prop] == 'object') {
      xml += OBJtoXML(new Object(obj[prop]));
    } else {
      xml += obj[prop];
    }
    xml += obj[prop] instanceof Array ? '' : '</' + parsedProp + '>';
  }
  var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
  return xml;
}

module.exports = {
  OBJtoXML,
  libraryParser: libraryParser.toXML, // just added to try library if keys with blank spaces are valid
};
