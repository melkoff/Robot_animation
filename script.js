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

let currentMessageIndex = 0;
let messages = document.querySelectorAll(".robot-message");

function showMessages() {
   let messages = document.querySelectorAll(".robot-message");
   // Time to show message
   let delay = 3000; // 3 seconds
   let currentIndex = -1; // Start from -1 to show first message

   function showMessage() {
      // Hide messages
      for (var i = 0; i < messages.length; i++) {
         messages[i].classList.remove("active");
      }

      // Update current message index
      currentIndex++;
      if (currentIndex >= messages.length) {
         currentIndex = 0; // Repeat messages if end
      }

      // Move current message to the beginning of the container

      let container = document.querySelector(".messages-container");
      let currentMessage = messages[currentIndex];
      container.prepend(currentMessage);

      // Show current message
      currentMessage.classList.add("active");

      setTimeout(showMessage, delay); // Show next message after set delay
   }

   showMessage(); // Start showing messages
}

document.getElementById("call-me-button").addEventListener("click", function () {

   showMessages(); // Start showing messages
});