
function getServerDate(callback){
	$.ajax({
		type : 'HEAD',
		url :  window.location.href,
    casche : false
	}).done(function(data, textStatus, xhr) {
		try {
			var result = new Date(xhr.getResponseHeader("Date"));
		} catch(e) {
			var result = new Date();
		}
		callback(result);
	}).fail(function() {
	  var result = new Date();
		callback(result);
	});
}

function makeHTML(result){
	$("#server").html(result);
}

getServerDate(makeHTML);

var clientDate = new Date();
$("#client").html(clientDate);