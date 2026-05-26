// Runs the interaction logic after the HTML document is ready.
document.addEventListener("DOMContentLoaded", function () {
  // Finds all preview buttons and the status message area.
  const playButtons = document.querySelectorAll(".play-button");
  const nowPlaying = document.querySelector("#now-playing");

  // Connects a click event to each preview button.
  playButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const trackName = button.dataset.track;

      // Clears the active class from any previously selected button.
      playButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      // Marks the clicked button as active.
      button.classList.add("active");

      // Shows which track was selected instead of playing an audio file.
      nowPlaying.textContent = "Now previewing: " + trackName;
    });
  });
});
