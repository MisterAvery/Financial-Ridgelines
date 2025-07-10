let canvas;
let ctx;


// Function to create a new vector object
function newVector(n1, n2) {
  return {a: n1, b: n2};
}

// Function to add two vector pbkjects and return the resultant
function addVectors(vec1, vec2) {
  vec1.a += vec2.a;
  vec1.b += vec2.b;

  return vec1;
}

class Point {
  constructor(x, y) {
    this.pos = newVector(x, y);
    this.aPos = newVector(x, y);
    this.vel = newVector(0, 0);
    this.acl = newVector(0, 0);
  }
  
  draw(xOffset, yOffset) {
    ctx.beginPath();
    ctx.arc(this.pos.a + xOffset, this.pos.b + yOffset, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    let diff = newVector(this.aPos.a - this.pos.a, this.aPos.b - this.pos.b); // Subtract the vectors
    
    //atraction to point
    diff.a /= 25;
    diff.b /= 25;
    addVectors(this.acl, diff);

    addVectors(this.vel, this.acl);
    addVectors(this.pos, this.vel);
  }
}

class Cloud {
  constructor(x, y, speed) {
    this.x = x;         // X position of the cloud
    this.y = y;         // Y position of the cloud
    this.speed = speed; // Horizontal speed
    
    this.points =  [
      new Point(20, 0),      // center-ish
      new Point(50, 0),      // right
      new Point(0, 0),       // left-most
      new Point(45, 25),     // lower right
      new Point(15, 25),     // lower left
      new Point(35, -25),    // upper right
      new Point(10, -20),    // upper left
    ];
  }

  // Update the cloud's position
  update() {
    this.x += this.speed;

    // If the cloud edge goes off screen, wrap it around
    if (this.x > canvas.width + 20) {
      this.x = -50;
    }
  }
}


let clouds = [new Cloud(100, 100, 0.4), new Cloud(600, 80, 0.45), new Cloud(1000, 120, 0.35)];


function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector("#landing-graphic").clientHeight;
  ctx.fillStyle = "#fffefe";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  clouds.forEach(cloud => {
    cloud.update();
    
    cloud.points.forEach(point => {
      point.update();
      point.draw(cloud.x, cloud.y);

      point.acl.a = 0;
      point.acl.b = 0;
  
      //wiggle factor
      point.vel.a *= 0.7;
      point.vel.b *= 0.7;
    });
  });
  
  requestAnimationFrame(draw);
}
