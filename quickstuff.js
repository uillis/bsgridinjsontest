/*quick stuff for demo*/

function loadJSON(url, callback) {   

		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function() {
		  if (this.status >= 200 && this.status < 400) {
		    // Success!
		    var data = JSON.parse(this.response);

		    if(typeof callback == 'function'){
		    	callback(data);
		    }

		  } else {

		  	callback();

		  }
		};

		request.onerror = function() {
			console.error('loadJSON',arguments);
		};

		request.send();

 }







