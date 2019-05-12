
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}	


function getID(newID){
	
	window.history.pushState( {} , '', newID );
				
	var workID = getUrlParam('workID','');
	
	if(workID != ""){
	
		var workTitle = worksData[workID].title;
		var workPoster = worksData[workID].poster;
		var workSubTitle = worksData[workID].subTitle;
		var workDescription = worksData[workID].description;
	
		$("#workTitle").html(workTitle);
		$("#workSubTitle").html(workSubTitle);
		$("#workPoster").attr("src", workPoster);
		$("#workDescription").html(workDescription);

	}else{
	
		console.log("no data to view");
	
	}
		
}


function removeParam(){
	window.history.replaceState({}, document.title, "/" + "JRAYCV/");
}