const scriptURL =
    "https://script.google.com/macros/s/AKfycbzPhOr2H_LAAqVdSaIHe00xo_hSxnoLMyJSf6qNzCz--eAQ5XFQBbhrF33UKIPm3mAe/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    delayNotice()
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
        })
        .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
        });
});

// here is the delayNotice to artificially lag for 3seconds so google can connect

function wait(ms = 0) {
return new Promise(resolve => setTimeout(resolve, ms))
}

async function delayNotice() {
sweetAlert({
    title: "Submitting your query",
    showCancelButton: false,
    showConfirmButton: false
})

await wait(3000);
console.log("done");
sweetAlert.close();
}