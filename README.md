# string-diff

Diffs two strings and prints a pretty output.

## CLI usage:

```bash
npm install -g string-diff

string-diff foo1 foo2

# or, string-diff files

string-diff --file file1 file2
```

## Programmatic usage:

```js
const stringDiff = require('string-diff');

const diff = stringDiff('foo1', 'foo2');

console.log(diff);
```
