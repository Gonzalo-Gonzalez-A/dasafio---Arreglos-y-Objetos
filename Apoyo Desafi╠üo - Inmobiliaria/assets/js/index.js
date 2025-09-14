
// Arreglo para propiedades en venta
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 3,
        costo: 4000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 3500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa semi adosada',
        src: 'https://www.toppropiedades.cl/imagenes/b_c199u431co5c0171.jpeg',
        descripcion: 'Esta casa antigua está ubicada en una exclusiva zona residencial',
        ubicacion: '123 virder val, Prestige Subtel, CA 78456',
        habitaciones: 3,
        banos: 2,
        costo: 2800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la ciudad',
        src: 'https://http2.mlstatic.com/D_NQ_NP_854212-MLC82425188120_022025-O-solanas-de-paso-hondo-casas.webp',
        descripcion: 'Este apartamento acogedor está situado en el centro de la cuidad con impresionantes vistas',
        ubicacion: '978 Mountain Road, Summit Peaks, CA 56234',
        habitaciones: 3,
        banos: 3,
        costo: 2900,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_656384-MLC76906304984_062024-F-townhouse-vistasol.webp',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares del bosque',
        ubicacion: '675 Sky Avenue, Skyview City, CA 89567',
        habitaciones: 3,
        banos: 2,
        costo: 3650,
        smoke: false,
        pets: true
    },
];

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

const ventaContainer = document.getElementById('ventaContainer');
const alquilerContainer = document.getElementById('alquilerContainer');

function renderProperties(properties, container, limit = 0) {
    let html = '';
    const propertiesToRender = limit > 0 ? properties.slice(0, limit) : properties;

    for (const propiedad of propertiesToRender) {
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

// Renderizar en la página principal
renderProperties(propiedadesVenta, ventaContainer, 3);
renderProperties(propiedadesAlquiler, alquilerContainer, 3);