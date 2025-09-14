// Arreglo para propiedades en alquiler
const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 980,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 1590,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa espaciosa gigante',
        src: 'https://http2.mlstatic.com/D_NQ_NP_950857-MLC72182606019_102023-O-casa-amplia-2-pisos-quilpue.webp',
        descripcion: 'Esta casa de 4 habitaciones está ubicada en el corazón de la ciudad, cerca de todo.',
        ubicacion: '233 Main Street, Anytown, CA 34912',
        habitaciones: 4,
        banos: 3,
        costo: 1100,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa espaciosa tipo A',
        src: 'https://http2.mlstatic.com/D_NQ_NP_626183-MLC91867418363_092025-O-se-vende-hermosa-casa-alto-manquehue-los-pinos-quilpue.webp',
        descripcion: 'Esta hermosa casa ofrece una vista impresionante al mar',
        ubicacion: '678 Ocean Avenue, Seaside Town, CA 99567',
        habitaciones: 3,
        banos: 2,
        costo: 1250,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en Condominio moderno en zona residencial',
        src: 'https://http2.mlstatic.com/D_NQ_NP_616992-MLC85891840094_062025-O-venta-casa-condominio-3-dormit-2-banos-estac-quilpue.web',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '321 Main Street, Anytown, CA 32912',
        habitaciones: 3,
        banos: 2,
        costo: 1560,
        smoke: false,
        pets: false
    },
];

const alquilerContainer = document.getElementById('alquilerContainer');

function renderProperties(properties, container) {
    let html = '';
    for (const propiedad of properties) {
        const smokeStatus = propiedad.smoke ?
            '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' :
            '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';

        const petsStatus = propiedad.pets ?
            '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' :
            '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';

        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        ${smokeStatus}
                        ${petsStatus}
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

// Renderizar todas las propiedades en alquiler
renderProperties(propiedadesAlquiler, alquilerContainer);