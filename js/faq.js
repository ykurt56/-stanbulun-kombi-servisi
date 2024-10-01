document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const chevron = question.querySelector(
      "i.fas.fa-chevron-down, i.fas.fa-chevron-up"
    );

    // Toggle answer visibility
    answer.classList.toggle("hidden");

    // Change chevron direction
    if (answer.classList.contains("hidden")) {
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    } else {
      chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
  });
});
