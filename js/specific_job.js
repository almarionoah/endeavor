
$(document).ready(()=>{
  var uri = window.location.href.split("?");
  var job_id = uri[1];
  $.ajax({
    url: 'https://us-central1-mlab-challenge.cloudfunctions.net/job?' + job_id,
    crossDomain: true,
    success:(job)=>{
      var template = '<section><img id="company_logo" alt="company logo" src=""/><h2 id="job_title">'+job["title"]+'</h2><h3 id="company_name">'+job["company"]+ '</h3><h3 id="created_date">'+job["created_at"]+'</h3><p id="description">'+job["description"]+'</p><p id="how_to_apply">'+job["how_to_apply"]+'</p></section>';
      $("body").append(template);
      $("#company_logo").attr("src", job["company_logo"]);
    },
    error: ()=>{
	alert("Something seems to be wrong on our side...");
  }
  });
  
});