//Each based on jQuery Framework

$.each(dataLayer, function(i) {
	if(this.event.indexOf("part-of-string-do-u-need-to-check") >= 0) {
		var pageNameFiltered = this.event
		console.log(pageNameFiltered)
	}    
})
