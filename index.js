const ngrams = require('n-gramify')
//this library changes the Dates object. And that's all we need here...
require('./lib/date.js');
const dehumanize_date = require('dehumanize-date');

module.exports = function (string) {
	string = string || "there will be a meeting next friday. Are you coming? How about next week?"

	var chunk = '';
	var date = null,
		reducted_date = null;

	//create dates object
	var dates = {
		dates: [],
		string: { in: string + '',
			out: '',
			annotated: string + ''
		}
	}

	// var ngrams=[]
	for (i = 6; i > 1; i--) {

		//loop thru ngrams
		ngrams(string, i).forEach(function (grams) {

			// console.log(grams);

			chunk = grams.join(' ');
			date = Date.parse(chunk);

			// console.log(date);

			if (date) {
				//find parts of grams that we can safely omit
				// var required_grams = grams.concat([]);

				while (grams.length) {

					reducted_date = dehumanize_date(grams.join(' '));

					if (reducted_date) {
						chunk = grams.join(' ');
						grams = [];
					}

					grams.shift();

				}

				if (reducted_date) {
					// console.log(chunk, reducted_date);
					// console.log(required_grams, grams);

					// return as ISOString
					date = new Date(reducted_date).toISOString();
					dates.dates.push(date);
					// console.log(chunk+">>"+date)	
					dates.string.annotated = dates.string.annotated.replace(chunk, '{DATE: ' + date + '}');
					string = string.replace(chunk, date);

				}

			}
		});

	}

	//add out value
	dates.string.out = string;

	return dates;

}