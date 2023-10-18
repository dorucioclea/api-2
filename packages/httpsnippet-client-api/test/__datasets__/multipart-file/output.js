import sdk from '@api/multipart-file';

sdk.postAnything({foo: 'test/__fixtures__/files/hello.txt'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
