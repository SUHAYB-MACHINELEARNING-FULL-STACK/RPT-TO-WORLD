import logo from './logo.svg';
import React from 'react'
import './Rpt.css'
import RPT from './logo.jpg';
import LOGO from './logo9.jpg';
import iHerb from './iHerb.png';
import Amazon from './amazon.jpg';
import Noun from './noon.png';
import Butcher from './butcher.jpg';
import Twitter from './twitter.png';
import Linkedin from './linkedin.png';
import Hello from './hello.png';
class Rpt extends React.Component {
  render() {
    return (
      <>
      <header>
        <div className="container">
          <img src={RPT} />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
            <img src={Twitter} width="50" height="50" id="img"/><li>Our Twitter</li>
            <img src={Linkedin} width="50" height="50" id="img" /><li>Our Linkedin</li>
          </ul>
        </div>
      </header>
      <div id="Trash" align="center">
        <img src={Hello} width="200" id="Hello2" />
        <img src={LOGO} id="LOGO" width="300" />
        <img src={Hello} width="200" id="Hello" />
        <h1 id="ST"><b id="R">RPT</b> <b id="T">TO</b> <b id="W">WORLD</b></h1>
        <p id="description">Transport and delivery of products naturally without exposure to heat or cold and with high quality</p>
        <button>SignUp</button>
        <hr />
        <h2>Shops</h2>
        <div id="Shops">
          <div id="iHerb" className="shop">
            <img src={iHerb} width="300" />
            <h1>iHerb</h1>
            <p>as pharmacy to transport product for health</p>
          </div>
          <div id="Amazon" className="shop">
            <img src={Amazon} width="300" height="300" />
            <h1>Amazon</h1>
            <p>as pharmacy to transport product for health</p>
          </div>
          <div id="Noun" className="shop">
            <img src={Noun} width="300" />
            <h1>Noon</h1>
            <p>as pharmacy to transport product for health</p>
          </div>
          <div id="butcher" className="shop">
            <img src={Butcher} width="300" height="300" />
            <h1>Butcher</h1>
            <p>as pharmacy to transport product for health</p>
          </div>
        </div>
      </div>
      {/*<hr/>
      <div align="center">
        <h2 id="SUHAYB">SUHAYB</h2>
      </div>
      <canvas></canvas>*/}
      <canvas></canvas>
      <footer>
        <div>
        <img src={RPT} width="500" height="200"/>
        </div>
        <div>
        <h3>Contact Us:</h3>
        <ul>
          <li>Phone Number:<a href="https://wa.me/0568208038">+966568208038</a></li>
          <li></li>
        </ul>
        </div>
      </footer>
      {/*<a href="#" class="tip">Link<span>This is the CSS tooltip showing up when you mouse over the link</span></a>*/}
      </>
    )
  }
}

export default Rpt;

// Little Canvas things
/*setTimeout(()=>{
var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext('2d');

// Set Canvas to be window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration, Play with these
var config = {
  particleNumber: 500,
  maxParticleSize: 10,
  maxSpeed: 40,
  colorVariation: 50
};

// Colors
var colorPalette = {
    bg: {r:12,g:9,b:29},
    matter: [
      {r:36,g:18,b:42}, // darkPRPL
      {r:78,g:36,b:42}, // rockDust
      {r:252,g:178,b:96}, // solorFlare
      {r:253,g:238,b:152} // totesASun
    ]
};

// Some Variables hanging out
var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,

// Draws the background for the canvas, because space
drawBg = function (ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.fillRect(0,0,canvas.width,canvas.height);
};

// Particle Constructor
var Particle = function (x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function (color, returnString) {
    var r,g,b,a, variation;
    r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
    g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
    b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
    a = Math.random() + .5;
    if (returnString) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
        return {r,g,b,a};
    }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function (p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
    return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function (x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function () {
    particles = particles.filter((p) => { 
      return (p.x > -100 && p.y > -100); 
    });
};


var initParticles = function (numParticles, x, y) {
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y));
    }
    particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
    });
};

// That thing
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     function(callback) {
        window.setTimeout(callback, 1000 / 60);
     };
})();


// Our Frame function
var frame = function () {
  // Draw background first
  drawBg(ctx, colorPalette.bg);
  // Update Particle models to new position
  particles.map((p) => {
    return updateParticleModel(p);
  });
  // Draw em'
  particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
  });
  // Play the same song? Ok!
  window.requestAnimFrame(frame);
};

// Click listener
/*document.body.addEventListener("click", function (event) {
    var x = event.clientX,
        y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
    console.log(event)
});
let i=1;
let event={ target: canvas, buttons: 0, clientX: 1123, clientY: 498, layerX: 1123, layerY: 2144 }
while(i<=90) {
  setTimeout(()=>{
  let event={ target: canvas, buttons: 0, clientX: Math.random()*1500, clientY: Math.random()*1500, layerX: Math.random()*1500, layerY: Math.random()*1500 }
  var x = event.clientX,
        y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
  },50*i)
  i+=1
}

// First Frame
frame();

// First particle explosion
initParticles(config.particleNumber);
},3000)*/