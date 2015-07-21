
var ngrams = require ( 'n-gramify' )
//this library changes the Dates object. And that's all we need here...
require('./lib/date.js')

module.exports=function(string){
	string=string || "there will be a meeting next friday. Are you coming? How about next week?"

	var chunk='';
	var date=null;

	//create dates object
	var dates={
		dates:[],
		string:{
			in:string+'',
			out:'',
			annotated:string+''
		}
	}

	// var ngrams=[]
	for(i=6;i>1;i--){

		//loop thru ngrams
		ngrams(string,i).forEach(function(grams){
			chunk=grams.join(' ');
			date=Date.parse(chunk);

			if(date){
				//return as ISOString
				date=new Date(date).toISOString();
				dates.dates.push(date);
				// console.log(chunk+">>"+date)	
				dates.string.annotated=dates.string.annotated.replace(chunk,'{DATE: '+date+'}');
				string=string.replace(chunk,date);	
			}			
		});

	}

	//add out value
	dates.string.out=string;

	return dates;

}

