function validateform(){
    var jobtitle = document.getElementById('jobtitle').value;

    if( /[^a-zA-Z\-\/ ]/.test( jobtitle ) ) {
        alert('Invalid Job title');
        document.getElementById("jobtitle").value = "";
        return false;
    }

    var placename = document.getElementById('placename').value;

    if( /[^a-zA-Z\-\/]/.test( placename ) ) {
        alert('Invalid Place name..');
        document.getElementById("placename").value = "";
        return false;
    }

    return true;     
}