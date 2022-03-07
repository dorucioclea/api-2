const sdk = require('api')('https://example.com/openapi.json');

sdk.post('/har', {foo: 'hello.txt'})
  .then(res => console.log(res))
  .catch(err => console.error(err));