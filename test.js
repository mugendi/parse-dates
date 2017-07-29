
var parse_date = require ( './index' )

var s=" Peter was born in 5th january 1994 will be 44 years old next week. "
var parsed=parse_date(s)

console.log(JSON.stringify(parsed,0,4));