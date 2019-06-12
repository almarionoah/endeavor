var work = null;
var searchBar = '<header id="search_bar"><label for="description_bar">Filter Results: <input type="text" placeholder="Job Description" id="description_bar" /></label><img src="https://static.thenounproject.com/png/101791-200.png" alt="search button" onclick="filter_search()" id="search_button" /><a id="reset" href="#" onclick="clear_filter();" style="color: white;">Clear Filter</a></header>';
$(document).ready(() => {
$("#main").append(searchBar);	
	
  $.ajax({
    url: "https://us-central1-mlab-challenge.cloudfunctions.net/jobs",
    success: jobListing => {
	  work = jobListing;
      jobListing.forEach(job => {
        var description = job["description"];
        var minimum_description_position = description.search("</p>");
        var minimum_description = description.substr(
          0,
          minimum_description_position + 2
        );
        var template =
          '<section><header class="header"><div id="company_logo"><img src=' +
          job["company_logo"] +
          'alt="logo" class="img-circle img-responsive"/></div><div id="company_details"><p id="company_name">' +
          job["company"] +
          '</p><p id="post_date">' +
          job["created_at"] +
          '</p></div></header><hr/><h2 id="job_name">' +
          job["title"] +
          '</h2><p id="location">' +
          job["location"] +
          '</p><p id="description">' +
          minimum_description +
          '<br/></p><a id="view_job" class="btn-success" onclick="openJob(\'' +
          job["id"] +
          "')\">VIEW JOB</a><br/></section>";
        $("#main").append(template);
      });
    }
  });

});

var openJob = (id) => {
  window.open('../screens/specific_job.html?id='+id,'specific job window');
}

var filter_search = () =>{
	var user_input = $("#description_bar").val().toLowerCase();
	work.forEach((job)=>{
		var description = job["description"].toLowerCase();
		var comparison = description.search(user_input);
		if(comparison != null || comparison !== -1)
		{
		description = job["description"];
        var minimum_description_position = description.search("</p>");
        var minimum_description = description.substr(
          0,
          minimum_description_position + 2
        );
        var template =
          '<section><header class="header"><div id="company_logo"><img src=' +
          job["company_logo"] +
          'alt="logo" class="rounded-circle"/></div><div id="company_details"><p id="company_name">' +
          job["company"] +
          '</p><p id="post_date">' +
          job["created_at"] +
          '</p></div></header><hr/><h2 id="job_name">' +
          job["title"] +
          '</h2><p id="location">' +
          job["location"] +
          '</p><p id="description">' +
          minimum_description +
          '<br/></p><a id="view_job" class="btn-success" onclick="openJob(\'' +
          job["id"] +
          "')\">VIEW JOB</a><br/></section>";
		$("#main").html(""); 
		$("#main").append(searchBar);
        $("#main").append(template);
		}
		else{
		$("#main").html("");  
        $("#main").append('<h2>No matches found<br/><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgBiyEcAdTIely9YFLV0qLqC3zEBspEKRFaiOJJakiNSURjK6BA" alt="sad puppy"/></h2>');
		}
	});
}

  var clear_filter = () =>{
	$("body").html("");
	$("#main").append(searchBar);
$.ajax({
    url: "https://us-central1-mlab-challenge.cloudfunctions.net/jobs",
    success: jobListing => {
	  work = jobListing;
      jobListing.forEach(job => {
        var description = job["description"];
        var minimum_description_position = description.search("</p>");
        var minimum_description = description.substr(
          0,
          minimum_description_position + 2
        );
        var template =
          '<section><header class="header"><div id="company_logo"><img src=' +
          job["company_logo"] +
          'alt="logo" class="img-circle img-responsive"/></div><div id="company_details"><p id="company_name">' +
          job["company"] +
          '</p><p id="post_date">' +
          job["created_at"] +
          '</p></div></header><hr/><h2 id="job_name">' +
          job["title"] +
          '</h2><p id="location">' +
          job["location"] +
          '</p><p id="description">' +
          minimum_description +
          '<br/></p><a id="view_job" class="btn-success" onclick="openJob(\'' +
          job["id"] +
          "')\">VIEW JOB</a><br/></section>";
        $("#main").append(template);

});
}
});
  }