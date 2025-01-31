document.getElementById("submitBtn").addEventListener("click", function() {
    let password = document.getElementById("password").value;
    if (password === "brawijaya keren") {
        window.location.href = "video.html";
    } else {
        document.getElementById("errorMsg").textContent = "Password salah! Coba lagi.";
    }
});