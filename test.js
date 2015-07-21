
var parse_date = require ( './index' )

var s="there are 252 cowna 14 goats. Negative 24. She was the 52 patient. What! 1000! He was ranked 2nd. King Mwati LVIII is dead! And then there is 5GB of data on that hard drive. Are you 78% sure? TestDasherize&Decamelization. Last September there was a goat on the door. She needs 3 pints of blood urgently! President Moi was born in 5th january 1994 will be 44 years old next week. Can you finish 2 liters of milk?"
var parsed=parse_date(s)

console.log(JSON.stringify(parsed,0,4));