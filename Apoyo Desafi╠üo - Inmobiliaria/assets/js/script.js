import { propiedadesVenta, propiedadesAlquiler } from './data.js';

function renderizarPropiedades(lista, contenedorId, limite = lista.length) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.slice(0, limite).forEach(prop => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });
}

// Detectar página activa
if (document.getElementById("ventaIndex")) {
  renderizarPropiedades(propiedadesVenta, "ventaIndex", 3);
}
if (document.getElementById("alquilerIndex")) {
  renderizarPropiedades(propiedadesAlquiler, "alquilerIndex", 3);
}
if (document.getElementById("ventaFull")) {
  renderizarPropiedades(propiedadesVenta, "ventaFull");
}
if (document.getElementById("alquilerFull")) {
  renderizarPropiedades(propiedadesAlquiler, "alquilerFull");
}



// import const { propiedadesVenta, propiedadesAlquiler } from './data.js';

// function renderizarPropiedades(lista, contenedorId, limite = lista.length) {
//   const contenedor = document.getElementById(contenedorId);
//   if (!contenedor) return;

//   contenedor.innerHTML = "";

//   lista.slice(0, limite).forEach(prop => {
//     contenedor.innerHTML += `
//       <div class="col-md-4 mb-4">
//         <div class="card">
//           <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
//           <div class="card-body">
//             <h5 class="card-title">${prop.nombre}</h5>
//             <p class="card-text">${prop.descripcion}</p>
//             <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
//             <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.baños} Baños</p>
//             <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
//             <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
//               <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
//             </p>
//             <p class="${prop.pets ? 'text-success' : 'text-danger'}">
//               <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
//             </p>
//           </div>
//         </div>
//       </div>
//     `;
//   });
// }

// // Detectar página activa
// if (document.getElementById("ventaIndex")) {
//   renderizarPropiedades(propiedadesVenta, "ventaIndex", 3);
// }
// if (document.getElementById("alquilerIndex")) {
//   renderizarPropiedades(propiedadesAlquiler, "alquilerIndex", 3);
// }
// if (document.getElementById("ventaFull")) {
//   renderizarPropiedades(propiedadesVenta, "ventaFull");
// }
// if (document.getElementById("alquilerFull")) {
//   renderizarPropiedades(propiedadesAlquiler, "alquilerFull");
// }


