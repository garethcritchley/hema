// replace this with the google app script address for the proper sheet,,,,
const scriptURL =                       
"https://script.google.com/macros/s/AKfycby11TG8ch-rUHn1SDL5thT1FJsdchWWTiVciLky2zgdRdVpHw6rM2xnOE49SIS2QW-x/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);

    sweetAlert({
        title: "Submitting your query",
        showCancelButton: false,
        showConfirmButton: false
    })

    fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
        console.log("done");
        sweetAlert.close();
        swal("Done", "Submitted Successfully.", "success");
    })
    .catch((error) => {
        console.log("done");
        sweetAlert.close();
        swal("Error", "Something went wrong. please try again!", "error");
    });
});

