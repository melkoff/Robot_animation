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
   fromStart()
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
   let delay = 1000; // 1 секунда
   let currentIndex = -1; // Почати з -1, щоб показати перше повідомлення

   function showOneMessage() {
      if (currentIndex >= 0) {
         messages[currentIndex].classList.remove("active");
      }

      currentIndex++;
      if (currentIndex >= messages.length) {
         currentIndex = 0; // Повторювати повідомлення, якщо кінець
      }

      let container = document.querySelector(".messages-container");
      let currentMessage = messages[currentIndex];
      container.prepend(currentMessage);
      currentMessage.classList.add("active");
      setTimeout(showOneMessage, delay); // Показати наступне повідомлення після затримки
   }

   showOneMessage();
}

function fromStart() {
   document.querySelector(".messages-container").innerHTML = "";
   document.querySelector(".robot-message").classList.remove("active");
   document.querySelector(".robot-message").classList.remove("active");
   document.getElementById("call-me-button").style.display = "block";
   document.getElementById("close-button").style.display = "none";
   document.querySelector(".robot-popup-container").classList.remove("active");
   document.querySelector(".robot-popup").classList.remove("active");


}
