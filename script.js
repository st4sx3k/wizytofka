document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("kontaktForm");
    const email = document.getElementById("email");
    const wiadomosc = document.getElementById("wiadomosc");
    const status = document.getElementById("status");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (email.value === "" || wiadomosc.value === "") {
            status.textContent = "Uzupełnij wszystkie pola!";
            status.style.color = "red";
            return;
        }

        status.textContent = "Wiadomość została wysłana ✔";
        status.style.color = "green";
        form.reset();
    });
});

