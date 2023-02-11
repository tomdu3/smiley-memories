// define buttons for modal
const modal = document.querySelector("#modal");
const openModal = document.querySelector("#rules");
const closeModal = document.querySelector("#close-btn");

// modal functions - timer paused when opened
openModal.addEventListener("click", () => {
  modal.classList.toggle("closed");
  modal.showModal();
  pauseTimer();
});

closeModal.addEventListener("click", () => {
  modal.close();
  modal.classList.toggle("closed");
  resumeTimer();
});

// open modal on the loading of the page
window.onload = function() {
  document.getElementById("modal").showModal();
};