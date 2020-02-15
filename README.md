<div align="center">
  <img src="https://i.postimg.cc/W3m5R6PT/forestfire.png" />
  <h1>forestfire-core</h1>
  <a href="https://www.codacy.com/manual/waspeer/forestfire-core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=waspeer/forestfire-core" target="_blank">
    <img src="https://img.shields.io/codacy/grade/30b218015c774d23a3bb8a47f1a45e88" />
  </a>
  <a href="https://choosealicense.com/licenses/mit/" target="_blank">
    <img src="https://img.shields.io/github/license/waspeer/forestfire-core" />
  </a>
  <p>DDD library</p>
</div>

This is my personal Domain Driven Design library I'm using across projects. It's intended to make working with the DDD architecture a little easier and faster. It's still in development at the moment, so the API may change and it's not yet published on NPM. What is there now has been documented with JSDoc and tests.

The library contains classes like [`Entity`](src/domain/entity.ts) and [`ValueObject`](src/domain/value-object.ts) that can be extended. It also provides helpers like [`Result`](src/logic/result/result.ts) module, that provides safe and typed error handling.

Most of it is based on [Khalil Stemmler's](https://khalilstemmler.com/) excellent blog.

## Usage

**Installation:**

```bash
git clone https://github.com/waspeer/forestfire-core
cd forestfire-core
yarn
tsc
```

From here you can either copy it into your project or use something like [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/).

## License

MIT © Wannes Salomé
