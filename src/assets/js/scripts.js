// This file contains JavaScript functionality for the website, including handling the language switcher and any interactive elements.

document.addEventListener("DOMContentLoaded", function() {
    const languageSwitcher = document.getElementById("language-switcher");
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener("change", function() {
            const selectedLanguage = this.value;
            if (selectedLanguage === "en") {
                window.location.href = "index-en.html";
            } else if (selectedLanguage === "zh") {
                window.location.href = "index-zh.html";
            }
        });
    }

    // Additional interactive elements can be added here
});