
# Extract dates from text

Easy dates parser that leverages on the power of [n-gramify](https://www.npmjs.com/package/n-gramify), [datejs](http://www.datejs.com) & [dehumanize-date](https://www.npmjs.com/package/dehumanize-date) to parse dates that other parsers would fail. 

The concept is simple, instead on Regex, we tokenize the string into 'reducing ngrams' & then extract dates!

**datejs** does the initial parsing & then we use **dehumanize-date** to confirm parsed tokens & format them.


```javascript

var parse_date = require ( 'parse-dates' )

var s=" Peter was born in 5th january 1994 will be 44 years old next week. "
var parsed=parse_date(s)

console.log(JSON.stringify(parsed,0,4));

```

Output:

```json

{
    "dates": [
        "1994-01-05T00:00:00.000Z"
    ],
    "string": {
        "in": " Peter was born in 5th january 1994 and will be 44 years old next week. ",
        "out": " Peter was born in 1994-01-05T00:00:00.000Z and will be 44 years old next week. ",
        "annotated": " Peter was born in {DATE: 1994-01-05T00:00:00.000Z} and will be 44 years old next week. "
    }
}                                                

  ```