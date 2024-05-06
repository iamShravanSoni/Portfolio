
function load() {
  var tl = gsap.timeline();
  tl.to(
    ".yellowload1",
    {
      top: "100%",
      delay: 0.4,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.from(
    ".yellowload2",
    {
      top: "100%",
      delay: 1.6,
      duration: 0.9,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    ".load h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );

  tl.to(".load", {
    display: "none",
    opacity: 0,
  });
}

load();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var element = document.querySelectorAll(".element");
var page2 = document.querySelector("#page2 ");
element.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});
