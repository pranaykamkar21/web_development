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

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");
const summaryMatch = document.querySelector("#summary-match");
const summaryStand = document.querySelector("#summary-stand");
const summaryPrice = document.querySelector("#summary-price");
const summaryQuantity = document.querySelector("#summary-quantity");
const summaryTotal = document.querySelector("#summary-total");

function updateBookingSummary() {
    const match = matchSelect.value;
    const stand = standSelect.value;
    let quantity = Number(quantityInput.value);
    let price = 0;

    if (match === "match-01") {
        if (stand === "general") price = 1500;
        if (stand === "premium") price = 3500;
        if (stand === "vip") price = 7500;
    } else if (match === "match-02") {
        if (stand === "general") price = 1200;
        if (stand === "premium") price = 3000;
        if (stand === "vip") price = 6500;
    } else if (match === "match-03") {
        if (stand === "general") price = 1000;
        if (stand === "premium") price = 2500;
        if (stand === "vip") price = 5500;
    }

    if (quantityInput.value === "" || !quantityInput.checkValidity()) {
        quantity = 0;
    }

    const total = price * quantity;
    if (match === "") {
        summaryMatch.textContent = "Not selected";
    } else {
        summaryMatch.textContent = matchSelect.options[matchSelect.selectedIndex].text;
    }

    if (stand === "") {
        summaryStand.textContent = "Not selected";
    } else {
        summaryStand.textContent = standSelect.options[standSelect.selectedIndex].text;
    }

    summaryPrice.textContent = "Rs. " + price;
    summaryQuantity.textContent = quantity;
    summaryTotal.textContent = "Rs. " + total;

    showToast("Booking summary updated.");
}

matchSelect.addEventListener("change", updateBookingSummary);
standSelect.addEventListener("change", updateBookingSummary);
quantityInput.addEventListener("change", updateBookingSummary);
quantityInput.addEventListener("input", updateBookingSummary);

const teamFilter = document.getElementById("team-filter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function () {
    const selectedTeam = teamFilter.value;

    matchCards.forEach(function (card) {
        const teams = card.getAttribute("data-teams").split(" ");
        card.style.display = selectedTeam === "all" || teams.includes(selectedTeam)
            ? ""
            : "none";
    });
});

const matchCardsContainer = document.getElementById("match-cards");
const viewButtons = document.querySelectorAll(".view-button");

viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        matchCardsContainer.classList.remove("grid-view", "list-view");
        matchCardsContainer.classList.add(button.getAttribute("data-view") + "-view");

        viewButtons.forEach(function (viewButton) {
            const isSelected = viewButton === button;
            viewButton.classList.toggle("active", isSelected);
            viewButton.setAttribute("aria-pressed", isSelected);
        });
    });
});

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});
