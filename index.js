gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".section");
gsap.to(sections,{
    

  xPercent: -100 * (sections.length - 1),
  scrollTrigger: {
    trigger: "#mainFrame",
    toggleActions: "play none none reverse",
    start: "top top",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#mainFrame").offsetWidth,
    invalidateOnRefresh: true,
  }
});
