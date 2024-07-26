document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const toggleIcon = groupHeader.querySelector(".toggle-icon");

    // Toggle icon between + and -
    toggleIcon.textContent = toggleIcon.textContent === "+" ? "-" : "+";

    groupBody.classList.toggle("open");

    // Close non-target open FAQs
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherToggleIcon = otherGroup.querySelector(
          ".faq-group-header .toggle-icon"
        );

        otherGroupBody.classList.remove("open");
        otherToggleIcon.textContent = "+";
      }
    });
  });
});
