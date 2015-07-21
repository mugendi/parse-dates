require('sugar')
var ngrams = require ( 'n-gramify' )
require('./lib/date.js')

module.exports=function(string){
	string=string || "there will be a meeting next friday. Are you coming? How about next week?"

	console.log(string)
	var chunk='';
	var date=null;
	var dates={
		dates:[],
		string:{
			in:Object.clone(string),
			out:'',
			annotated:Object.clone(string)
		}
	}



	// var ngrams=[]
	for(i=6;i>1;i--){


		//loop thru ngrams
		ngrams(string,i).forEach(function(grams){
			chunk=grams.join(' ');
			date=Date.parse(chunk);

			if(date){
				date=Date.create(date).iso();
				dates.dates.push(date);
				// console.log(chunk+">>"+date)	
				//if date, then replace string
				dates.string.annotated=dates.string.annotated.replace(chunk,'{DATE: '+date+'}');
				// dates.string.out=dates.string.out.replace(d.text,date);	
				string=string.replace(chunk,date);	
			}			
		});

	}


	dates.string.out=string;

	// console.log(JSON.stringify(dates,0,4));
	

	return dates;

}

