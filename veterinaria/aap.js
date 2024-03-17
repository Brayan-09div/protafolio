// funciones del html 1

particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#FFFFFF",
      },
    },
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".image-carousel img");
    var index = 0;
    function showImage(i) {
      images.forEach(function (img) {
        img.style.display = "none";
      });
  
      images[i].style.display = "block";
    }
    function nextImage() {
      index = (index + 1) % images.length;
      showImage(index);
    }
    showImage(index);
    setInterval(nextImage, 4000);
  });
  
  
  function Redirigir() {
    console.log("Clic en el botón. Redirigiendo...");
    window.location.href = "./indexx.html";
  }