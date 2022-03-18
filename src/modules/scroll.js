const scroll = () => {
  const links = document.querySelectorAll(".top-menu a");

  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      const id = element.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

export { scroll };
