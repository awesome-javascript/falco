const { join } = require('path')
const falco = require('../')
const { tree } = require('../')
const reFile = require('../lib/helper/reFile')

// const js = `import React from 'react'
// import { render } from 'react-dom'
// render(<div>hello world</div>, document.querySelector('#root'))`

const js1 = `import two from 'two'
console.log(two())`

const js2 = 'console.log(\'?\')'

const js3 = `const two = require('two')
console.log(two())`

const js4 = `import 'reset-css'`

// falco({
//   entry: [{ js: js4 }],
//   cache: true,
//   cssModule: true,
//   cssSourceMap: true,
//   jsSourceMap: true,
// })
//   .then(res => console.log(res))

const dir = join(__dirname, 'example')
const outputDir = join(__dirname, 'output')
const dataTree = tree(dir)

reFile(dataTree, outputDir)
