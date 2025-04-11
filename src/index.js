const accordionButtons = document.querySelectorAll("[data-accordion]");

accordionButtons.forEach(accordion => {
   accordion.addEventListener("click", () => {
      const accordionId = accordion.getAttribute("aria-controls")
      const accordionAnswer = document.getElementById(accordionId)

      const isOpen = !accordionAnswer.classList.contains("hidden")

      accordion.setAttribute("aria-expanded", isOpen ? "false" : "true")

      document.querySelectorAll(".accordion-answer").forEach(p => {
         p.classList.add("hidden", "opacity-0", "-translate-y-5")
         p.classList.remove("opacity-100", "translate-y-0")
      })

      const plusIcon = accordion.querySelector(".icon-plus")
      const minusIcon = accordion.querySelector(".icon-minus")
      if (!isOpen) {
         accordionAnswer.classList.remove("hidden")
         plusIcon.classList.add("hidden")
         minusIcon.classList.remove("hidden")

         setTimeout(() => {
            accordionAnswer.classList.remove("opacity-0", "-translate-y-5")
            accordionAnswer.classList.add("opacity-100", "-translate-y-0")
         }, 100)
      } else {
         plusIcon.classList.remove("hidden")
         minusIcon.classList.add("hidden")
      }
   })
})
