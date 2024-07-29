<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/pack-test](./pack-test.md)

## pack-test package

Verify that the published contents of your node package will pass a basic smoke test.

## Example


```sh
node --test
```

```js
// test/pack.test.mjs
import { testPack } from '@csstools/pack-test';

await testPack("your-module-name");
```

## Functions

<table><thead><tr><th>

Function


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[testPack(moduleName)](./pack-test.testpack.md)


</td><td>

Verify that the published contents of your node package will pass a basic smoke test.


</td></tr>
</tbody></table>