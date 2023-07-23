// Example JavaScript code
// You can add your own JavaScript functionality here
// Function to change the background color of the avenger divs
function changeDivBackground() {
    var avengers = document.querySelectorAll(".avenger");
    for (var i = 0; i < avengers.length; i++) {
      avengers[i].style.backgroundColor = getRandomColor();
    }
  }
  
  // Function to generate a random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Call the function when the page finishes loading
  window.onload = function() {
    changeDivBackground();
  };
  
  // Function to add event listeners to avenger links for redirecting to individual character pages
  function addAvengerLinkListeners() {
    var avengerLinks = document.querySelectorAll(".avenger-link");
    for (var i = 0; i < avengerLinks.length; i++) {
      avengerLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        var avengerClass = this.querySelector(".avenger").classList[1];
        window.location.href = this.href;
        document.body.classList.add(avengerClass + "-page");
      });
    }
  }
  
  // Call the function when the page finishes loading
  window.onload = function() {
    changeDivBackground();
    addAvengerLinkListeners();
  };
  