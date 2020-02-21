/**
 * My cards animations with SVG need some adjustment on small devices, so I
 * added some JS for calculating with, top position of SVG and margin top of
 * card content
 */
const cardResizeHandler = () => {
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      entry = entry.target;
      const cardWidth = entry.offsetWidth;

      let top = -1 * Math.round(cardWidth / 1.74);
      let marginTop = top - 20;

      entry.querySelector(".card__svg").style.top = top;
      entry.querySelector(".card__content").style.marginTop = `${marginTop}px`;
    }
  });

  document
    .querySelectorAll(".card")
    .forEach(card => resizeObserver.observe(card));
};

/**
 * On mobile devices I want to show the go to article link on the cards as it
 * is written to work only with on hover or focus so I need to add this for
 * scrolling on mobile devices.
 */
const activeCardOnScrollHandler = () => {
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
};

/**
 * Appends on footer the actual year :D
 */
const showCopyRightYear = () => {
  document.getElementById(
    "copyright-year"
  ).innerText = `©${new Date().getFullYear()}`;
};

/**
 * Waits until the DOM has loaded all the content, inside of here I run the necessary event listeners
 */
window.addEventListener("DOMContentLoaded", () => {
  activeCardOnScrollHandler();
  cardResizeHandler();
  showCopyRightYear();
});
