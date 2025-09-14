// Arreglo para propiedades en venta
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 4,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa semi adosada',
        src: 'https://www.toppropiedades.cl/imagenes/b_c199u431co5c0171.jpeg',
        descripcion: 'Esta casa antigua está ubicada en una exclusiva zona residencial',
        ubicacion: '123 virder val, Prestige Subtel, CA 78456',
        habitaciones: 3,
        costo: 2,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la ciudad',
        src: 'https://http2.mlstatic.com/D_NQ_NP_854212-MLC82425188120_022025-O-solanas-de-paso-hondo-casas.webp',
        descripcion: 'Este apartamento acogedor está situado en el centro de la cuidad con impresionantes vistas',
        ubicacion: '978 Mountain Road, Summit Peaks, CA 56234',
        habitaciones: 3,
        costo: 2,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_656384-MLC76906304984_062024-F-townhouse-vistasol.webp',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares del bosque',
        ubicacion: '675 Sky Avenue, Skyview City, CA 89567',
        habitaciones: 3,
        costo: 3,
        smoke: false,
        pets: true
    },
];


const ventaContainer = document.getElementById('ventaContainer');

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
                            <i class="fas fa-bath"></i> ${propiedad.costo} Baños
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

// Renderizar todas las propiedades en venta
renderProperties(propiedadesVenta, ventaContainer);