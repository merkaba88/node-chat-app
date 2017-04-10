var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });

});

describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {
    var from = 'Admin';
    var lat = 1;
    var lng = 3;
    var url = 'https://www.google.com/maps?q=1,3';
    var location = generateLocationMessage(from, lat, lng);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({
      from,
      url
    });
  });

});
