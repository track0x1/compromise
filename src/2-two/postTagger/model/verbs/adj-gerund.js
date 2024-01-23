export default [
  // that were growing
  { match: '(that|which) were [%Adj|Gerund%]', group: 0, tag: 'Gerund', reason: 'that-were-growing' },
  // was dissapointing
  // { match: '#Copula [%Adj|Gerund%]$', group: 0, tag: 'Adjective', reason: 'was-disappointing$' },
  // is empty
  { match: '#Copula [%Adj|Present%]$', group: 0, tag: 'Adjective', reason: 'was-empty$' },

  // repairing crubling roads
  { match: '#Gerund [#Gerund] #Plural', group: 0, tag: 'Adjective', reason: 'hard-working-fam' },

  // { match: '(that|which) were [%Adj|Gerund%]', group: 0, tag: 'Gerund', reason: 'that-were-growing' },
]
