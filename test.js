const test = require('ava');

const stringDiff = require('./index');

test('stringDiff outputs a string diff (using a stream)', (t) => {
  let data = '';
  const stream = {
    write: chunk => {
      data += chunk;
    }
  };

  const result = stringDiff('foo1', 'foo2', stream);

  t.is(data, '\x1b[0m\x1b[2mfoo\x1b[0m\x1b[31m1\x1b[0m\x1b[32m2');
  t.is(result, null);
});

test('stringDiff outputs a string diff (without using a stream)', (t) => {
  const data = stringDiff('foo1', 'foo2');

  t.is(data, '\x1b[0m\x1b[2mfoo\x1b[0m\x1b[31m1\x1b[0m\x1b[32m2');
});
