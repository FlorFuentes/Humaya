//Boton scroll
window.onscroll = function () {
  var scrollButton = document.getElementById("scrollButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// comportamiento de desplazamiento suave al hacer clic en el botón
document.getElementById("scrollButton").addEventListener("click", function () {
  document.body.scrollTop = 0; // Para navegadores que no sean Chrome ni Firefox
  document.documentElement.scrollTop = 0; // Para Chrome y Firefox
});




//Consumiendo una api para las recetas
document.addEventListener('DOMContentLoaded', function () {
  const url = 'https://sazonapi.hymsoft.repl.co/api/v1/recipies';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recetasContainer = document.getElementById('recetas-container');

      // Si quiero mostrar solo las primeras 3 recetas------const recetas = data.data.slice(0, 3);
      const recetas = data.data;

      // Itera sobre las recetas y creo las tarjetas
      recetas.forEach(receta => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';

        card.innerHTML = `
            <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}">
            <div class="card-body">
              <h5 class="card-title text-center">${receta.nombre}</h5>
              <p class="card-text">${receta.descripcion_tipo}</p>
              <p class="card-text card-title">Tiempo de cocción: ${receta.tiempo_coccion}</p>
              <p class="card-text card-title">Nivel de dificultad: ${receta.nivel_dificultad}</p>
            </div>
          `;

        recetasContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error al obtener datos:', error));
});


//Para que no aparezca la pagina de Formspree cuando el usuario envie el formulario.
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtén los datos del formulario
  var formData = new FormData(this);

  // Envía los datos a Formspree
  fetch('https://formspree.io/f/mpzgldzl', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
    .then(function (response) {
      if (response.ok) {
        alert('¡Tu mensaje ha sido enviado con éxito!'); // Mensaje de éxito personalizado
        document.getElementById('contactForm').reset(); // Limpia el formulario
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.'); // Mensaje de error personalizado
      }
    });
});
