// Side nav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {
  menuWidth: 100
});

//Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 700,
  transition: 500,
  interval: 6000
});

// 2 Gis
DG.then(function() {
  const map = DG.map("map", {
    center: [56.521884, 84.968148],
    zoom: 17
  });
  DG.marker([56.521884, 84.968148])
    .addTo(map)
    .bindLabel("Парикмахерская АСТРА ");
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollspy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspy);
});
