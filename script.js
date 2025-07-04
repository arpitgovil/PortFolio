const toggleBtn = document.getElementById("toggleDark");
const body = document.getElementById("pageBody");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});
toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});
submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent form submission for demo purposes
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                // Here you would typically send the data to a server
            } else {
                alert("Please fill in all fields.");
            }
        }