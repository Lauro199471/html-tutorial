function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem("issues"));
    var issuesListe = document.getElementById("issuesList");

    issuesListe.innerHTML = "";

    for (var index = 0; index < issues.length; i++) {
        var id = issues[index].id;
        var desc = issues[index].description;
        var severity = issues[index].severity;    
        var assignedTo = issues[index].assignedTo;
        var status = issues[index].status; 
        
        issues.innerHTML += 
            '<div class="well">' + 
            '<h6>Issue ID: ' + id + '</h6>' +
            '<p><span class="label label-info">' + status + "</span></p>" +
            '<h3>' + desc + '</h3>' +
            '<p><span class="glyphicon glypoicon-time"></span>' + severity + "</p>" +
            '<p><span class="glyphicon glypoicon-user"></span>' + assignedTo + "</p>" +
            '<a href="#" onclick="setStatusClose(\'' + id + '\')" class="btn btn-warning">Close</a>' +
            '<a href="#" onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
            '</div>';
    }
}