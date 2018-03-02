# atmnb
[![Build Status](https://travis-ci.org/qiugits/atmnb.svg?branch=master)](https://travis-ci.org/qiugits/atmnb)
[![npm](https://img.shields.io/npm/v/atmnb.svg)](https://www.npmjs.com/package/atmnb)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE)

manaba出席のコマンドラインツール、Node.js版です。\
[GoogleChrome/puppeteer][puppeteer]を利用しています。

> Inspired by [shuuji3/manaba-attend](https://github.com/shuuji3/manaba-attend)

## Dependency
- `Node.js`, `npm`
- npm installしたbinにパスが通っていること
- 環境変数に`MANABA_USERNAME`と`MANABA_PASSWORD`、または`UTID_13`と`UTID_PASS`のいずれかの組み合わせでmanabaのユーザ名とパスワードを用意すること

## Install

```terminal
$ npm install atmnb
```

## Usage

```terminal
$ atmnb 1234567
```


`-v`オプションでHeadless Chromeモードを解除して描画させることができます。

```terminal
$ atmnb -v 1234567
```


---


### Related projects
[qiugits/utprint](https://github.com/qiugits/utprint) 同じくコマンドラインから、全学計算機のプリンタにプリントするツール

### Reference
[統一認証システム](https://account.tsukuba.ac.jp/list.html)


[puppeteer]: https://github.com/GoogleChrome/puppeteer
