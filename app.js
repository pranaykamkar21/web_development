function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

document.querySelectorAll(".match-book-link").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("book-ticket").scrollIntoView({
            behavior: "smooth"
        });
        showToast("Taking you to the booking form.");
    });
});
