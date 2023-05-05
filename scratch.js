/* eslint-disable no-console, no-unused-vars */
import nlp from './src/four.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)

// nlp.verbose('tagger')

let arr = [

  // 'peacemaking',
  // 'fundraising',
  // 'matchmaking',



  'pile',
  'profile',
  'projectile',
  'reconcile',
  'smile',
  'sterile',
  'stile',
  'stockpile',
  'textile',
  'tile',
  'vile',
  'impale',
  'beguile',

  // 'please do not speak',
  // 'is a tough read',
  // 'spot on',
  // 'up to date',
  // 'sleepier',
  // 'guiltier',
  // 'hairier',
  // 'richest',

  // 'jet',

  // "sittin",
  // "ridin",
  // "jus",
  // "foregoing",
  // "allergic",
  // "listed",

  // "quo",
  // "triple",
  // "foremost",
  // "friends",
  // "guys",

  // "playin",
  // "waitin",
  // "gettin",
  // "comin",
  // "livin",
  // "sayin",
  // "doin",
  // "lovin",


  // "tone",
  // "shore",

  // "i drive to the cottage",
  // "He will study biology in college.",
  // "drive",
  // "vie",
  // "convoluted",
  // "rooted",
  // "trumpeted",

  // "wad",
  // "sub",



  // 'overtime',

  // "would be amusing",
  // "would be outstanding",
  // "small fragment",

  // 'manufacturing',
  // 'stream',
  // 'cave',
  // 'what companies are doing is',


]
let doc = nlp(arr[0]).debug()
console.log(doc.verbs().conjugate())
// doc.verbs().toPastParticiple()
// console.log(doc.text())
// console.log(doc.compute('root').text('root'))
// console.log(doc.json({ root: true })[0])

// let doc = nlp("Jeff's bikes")
// doc.swap('Jeff', 'John')
// console.log(doc.text())
// console.log(doc.json()[0])



