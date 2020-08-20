// Your code goes here

function cool() {
  document.findElementById = "text"
}

document.addEventListener("DOMContentLoaded", function() {
  updateDom()
} );

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);