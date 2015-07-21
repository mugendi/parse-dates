require('sugar')
// var ngrams = require ( 'n-gramify' )
var _ = require('lodash');
var chrono= require('chrono-node');

module.exports=function(str){
	str=str || "there will be a meeting next friday. Are you coming? How about next week?"

	//remove extra spaces
	str=str.replace(/\s{2,}/g,' ');

	var dates={
		dates:[],
		string:{
			in:_.clone(str),
			out:_.clone(str),
			annotated:_.clone(str)
		}
	}

	//parse & construct object
	chrono.parse(str).forEach(function(d){
		date=Date.create(d.ref).iso();
		dates.dates.push(date);
		// console.log(chunk+">>"+date)	
		//if date, then replace string
		dates.string.annotated=dates.string.annotated.replace(d.text,'{DATE: '+date+'}');
		dates.string.out=dates.string.out.replace(d.text,date);

	});

	

	return dates;

}

