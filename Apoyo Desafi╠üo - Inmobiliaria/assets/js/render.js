import { smokeStatus, petsStatus } from './data.js';

export function renderizarPropiedades(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(prop => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p>${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> $${prop.costo} millones</p>
            ${smokeStatus(prop.smoke)}
            ${petsStatus(prop.pets)}
          </div>
        </div>
      </div>
    `;
  });
}