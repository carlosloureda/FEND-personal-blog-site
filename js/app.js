(function() {
  const observaleSections = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        observaleSections.forEach(section =>
          section.classList.remove("highlighted")
        );
        entries[0].target.classList.toggle("highlighted");
      }
    },
    { threshold: [0.2] }
  );

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    observaleSections.forEach(section => {
      observer.observe(section);
    });
  }
})();
