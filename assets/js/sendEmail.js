(function () {
    emailjs.init("user_iEpN5sXK1VNMcUgOFIEuM");
})();

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm("contact_service", "contact_form", this);
        alert(SUPPORT_MESSAGE);
        location.reload();
    });
};

 