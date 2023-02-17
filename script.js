function validate() {
    let pass = document.forms["myForm"]["p-word"].value;
    let bday = new Date(document.forms["myForm"]["b-day"].value);
    const ageInMs = Date.now() - bday.getTime();
    const age = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

    if (pass.length > 8 && age > 21) {
        document.getElementById('msg').innerText = "Hooray! You account has been succesfuly created";
        document.getElementById('p-error').innerText = "";
        document.getElementById('b-error').innerText = "";
    }
    if (pass.length < 8) {
        document.getElementById('p-error').innerText = "password must be at least 8 characters";
    }
    if (age < 21) {
        document.getElementById("b-error").innerText = "You must be at least 21 years old to proceed";
    } 
    
    return false;
}

function rstFrm() {
    document.getElementById('msg').innerText = "";
    document.getElementById('p-error').innerText = "";
    document.getElementById('b-error').innerText = "";
}