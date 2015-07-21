require('sugar')
var chrono = require ( 'chrono-node' )
var ngrams = require ( 'n-gramify' )

module.exports=function(str){
	str=str || "there will be a meeting next friday. Are you coming? How about next week?"

	//remove extra spaces
	str=str.replace(/\s{2,}/g,' ');

	console.log(str);

	var loops=0

	//loop thru tokens of 6 all the way to 1
	for(var i=6; i>0; i--){
		var chunk='',
			d='';
		
		//create ngrams & loop thru them trying to parse outr dates
		ngrams(str,i).forEach(function(ngs,i){
			
			chunk=ngs.join(' ');
			d=Date.create(chunk)
			date=( d.isValid())? d.iso() : '';

			if(date){
				//if date, then replace string
				str=str.replace(chunk,'{DATE:'+date+'}')
			}
			

			// console.log(chunk,date)

		})

	}

	console.log(str)

	// var c=chrono.parseDate(str)


	// console.log(Date.create('June 1st, 2012'))
}

