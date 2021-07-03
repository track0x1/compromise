/* eslint-disable no-console, no-unused-vars */
// const nlp = require('./src/index')
import nlp, { model } from './src/index.js'
// import nlp from './src/tokenize.js'
process.env.DEBUG_TAGS = true

nlp.verbose(true)

// nlp.verbose(true)
let doc = nlp(`col. Patrick said march and feb. etc.`)
doc.debug()
doc.match('#Abbreviation #Person #PastTense #Month #Conjunction #Abbreviation #Abbreviation').debug()

//

// console.log(doc.json())
// console.log(model.lexicon['healing over'])
// console.log(model.tags.Person)
// console.log(model._multiCache.has('healing'))

/*
['swore', '#PastTense'],
['tore', '#PastTense'],
['gore', '#Noun'],
['', '#'],
['', '#'],
['', '#'],
*/
