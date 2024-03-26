function showPopup(message) {
   let popup = document.getElementById('popup');
   let messageElement = document.getElementById('message');
   messageElement.innerHTML = message;
   popup.style.display = 'block';
}

// Function to close robot
function closePopup() {
   let popup = document.getElementById('popup');
   popup.style.display = 'none';
}

document.getElementById("call-me-button").addEventListener("click", function () {
   // Hide the Call Me button
   document.getElementById("call-me-button").style.display = "none";
   // Show the close button
   document.getElementById("close-button").style.display = "block";
   document.querySelector(".robot-popup-container").classList.add("active");
   document.querySelector(".robot-popup").classList.add("active");
   document.querySelector(".call-robot").classList.add("active");
});

document.getElementById("close-button").addEventListener("click", function () {
   if (document.querySelector(".robot-popup-container").classList.contains("active")) {
      document.getElementById("robot-image").style.transform = "rotate(0deg)";
      // Show Call Me button again
      document.getElementById("call-me-button").style.display = "block";
      // Hide close button
      document.getElementById("close-button").style.display = "none";
      document.querySelector(".robot-popup-container").classList.remove("active");
      document.querySelector(".robot-popup").classList.remove("active");
      document.querySelector(".call-robot").classList.remove("active");
      // Hide the robot message
      document.querySelector(".robot-message").style.display = "none";
   }
});
