// Start events on click call-me-button
document.getElementById("call-me-button").addEventListener("click", function () {
   showMessages();
   // Hide the Call Me button
   document.getElementById("call-me-button").style.display = "none";
   // Show the close button
   document.getElementById("close-button").style.display = "block";
   // Add class active to change style
   document.querySelector(".robot-popup-container").classList.add("active");
   // Add class active to change style
   document.querySelector(".robot-popup").classList.add("active");
});

// Start events on click close-button
document.getElementById("close-button").addEventListener("click", function () {

   // Show Call Me button again
   document.getElementById("call-me-button").style.display = "block";
   // Hide close button
   document.getElementById("close-button").style.display = "none";
   // Remove class active to change style by default
   document.querySelector(".robot-popup-container").classList.remove("active");
   // Remove class active to change style by default
   document.querySelector(".robot-popup").classList.remove("active");
});

function showMessages() {
   let messages = document.querySelectorAll(".robot-message");
   let delay = 4000; // 4 seconds
   let currentIndex = -1; // Start with the first message

   function showOneMessage() {
      if (currentIndex >= 0) {
         messages[currentIndex].classList.remove("active");
      }

      currentIndex++;
      if (currentIndex >= messages.length) {
         currentIndex = 0;
      }

      let container = document.querySelector(".messages-container");
      let currentMessage = messages[currentIndex];
      container.prepend(currentMessage);
      currentMessage.classList.add("active");
      setTimeout(showOneMessage, delay); // Show the next message after the delay
   }

   showOneMessage();
}