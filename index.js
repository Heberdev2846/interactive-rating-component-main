// LO QUE HACE ESTE BLOQUE ES QUE AL HACER CLICK EN EL BOTON DE ENVIAR, 
// TE REDIRIGE A LA PAGINA DE AGRADECIMIENTO
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones numéricos
    const numericButtons = document.querySelectorAll(".botones button");
  
    // Variable global para almacenar el número seleccionado
    let selectedRating = null;
  
    // Agrega un evento de clic a cada botón numérico
    numericButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remueve la clase 'selected' de todos los botones numéricos
        numericButtons.forEach((btn) => btn.classList.remove("selected"));
  
        // Agrega la clase 'selected' al botón clickeado
        this.classList.add("selected");
  
        // Almacena el número seleccionado en la variable global
        selectedRating = this.getAttribute("data-value");
      });
    });
  
    // Obtén el botón de envío
    const submitBtn = document.getElementById("submitBtn");
  
    // Agrega un evento de clic al botón de envío
    submitBtn.addEventListener("click", function () {
      // Almacena el número seleccionado en el sessionStorage
      sessionStorage.setItem("selectedRating", selectedRating);
      // Redirige a la página de agradecimiento después de hacer clic en el botón
      window.location.href = "index3.html?rating=" + selectedRating;
    });
  });
  
  
  
  

// LO QUE HACE ESTE BLOQUE ES SELECCIONAR EL BOTON DE LA CALIFICACION    

document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el número seleccionado desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRating = urlParams.get("rating");
  
    // Actualiza el contenido del <span> en la página de agradecimiento con el número seleccionado
    const selectedRatingElement = document.getElementById("selectedRating");
    selectedRatingElement.textContent = selectedRating;
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones numéricos
    const numericButtons = document.querySelectorAll(".botones button");
  
    // Variable global para almacenar el número seleccionado
    let selectedRating = null;
  
    // Agrega un evento de clic a cada botón numérico
    numericButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remueve la clase 'selected' de todos los botones numéricos
        numericButtons.forEach((btn) => btn.classList.remove("selected"));
  
        // Agrega la clase 'selected' al botón clickeado
        this.classList.add("selected");
  
        // Almacena el número seleccionado en la variable global
        selectedRating = this.getAttribute("data-value");
      });
    });
  
    // Obtén el botón de envío
    const submitBtn = document.getElementById("submitBtn");
  
    // Agrega un evento de clic al botón de envío
    submitBtn.addEventListener("click", function () {
      // Almacena el número seleccionado en el sessionStorage
      sessionStorage.setItem("selectedRating", selectedRating);
    });
  });
  
  
 
  
  