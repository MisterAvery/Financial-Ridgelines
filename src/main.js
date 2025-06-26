let canvas;
let ctx;

function setup() {
  canvas = document.querySelector("#landing-graphic > canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector("#landing-graphic").clientHeight;
}

function draw() {
  ctx.fillStyle = "#fffefe";
  ctx.fillRect(100, 100, 120, 60);
  ctx.fillRect(600, 130, 160, 60);
  ctx.fillRect(1000, 80, 140, 67);
  
  // requestAnimationFrame(draw);
}