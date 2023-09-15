document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const socialIcons = document.getElementById("socialIcons");
    const iconToggle = document.querySelector(".icon-toggle");

    toggleButton.addEventListener("click", function () {
        if (socialIcons.style.display === "block") {
            socialIcons.style.display = "none";
            iconToggle.style.transform = "rotate(0deg)";
        } else {
            socialIcons.style.display = "block";
            iconToggle.style.transform = "rotate(180deg)";
        }
    });
});

