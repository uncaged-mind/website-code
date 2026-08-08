const form = document.getElementById("recommendForm");

const overlay = document.getElementById("formOverlay");
const messageIcon = document.getElementById("messageIcon");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");
const closeMessage = document.getElementById("closeMessage");


form.addEventListener("submit", async (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const guest = document.getElementById("guest").value.trim();
    const reason = document.getElementById("reason").value.trim();


    // Basic validation

    if (!name || !guest || !reason) {

        showMessage(
            false,
            "Missing Information",
            "Please complete all required fields before submitting."
        );

        return;

    }



    const data = new FormData();


    data.append(
        "entry.512539563",
        name
    );


    data.append(
        "entry.2000126096",
        document.getElementById("email").value
    );


    data.append(
        "entry.862888697",
        guest
    );


    data.append(
        "entry.974146102",
        document.getElementById("website").value
    );


    data.append(
        "entry.1579336023",
        reason
    );



    try {


        await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSchOQoSvKFZUQ3XncxnuN7SCuNtv2NTEDdKK9aV1aFeXHIEyA/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: data
            }
        );


        form.reset();


        showMessage(
            true,
            "Thank You!",
            "Your guest nomination has been submitted successfully."
        );



    } catch (error) {


        showMessage(
            false,
            "Something Went Wrong",
            "Your submission could not be completed. Please try again."
        );


    }


});



function showMessage(success, title, text) {


    overlay.classList.add("active");


    if (success) {

        messageIcon.className = "fa-solid fa-circle-check";

    } else {

        messageIcon.className = "fa-solid fa-circle-exclamation";

    }


    messageTitle.textContent = title;

    messageText.textContent = text;


}



closeMessage.addEventListener("click", () => {


    overlay.classList.remove("active");


    if (messageTitle.textContent === "Thank You!") {

        window.location.href = "index.html";

    }


});