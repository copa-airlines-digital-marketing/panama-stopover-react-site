export default {
    es: {
        name: 'Alquiler de Autos',
        bannerImg: '../img/car-rentals/banner-page.png',
        breadcrumb: [
            'Alquiler de Autos',
            'Avis'
        ],
        mainText: [
            {
              title: "Alquiler de autos",
              subtitle: "Encuentra el auto perfecto para tu recorrido por Panamá.",
              thirdtitle: "Aprovecha estas promociones y elige el vehículo que más te guste.",
              infoUrl: ""
            }
          ],
        cars: [
            {
                id: 1,
                bannerImg: '../img/car-rentals/ford-banner.png',
                promotionImg: '../img/car-rentals/avis.svg',
                promotionText: '50% de descuento en la porción de tiempo y kilometraje de la tarifa de alquiler.',
                code: 'AWD O870700',
                considerations: [
                    'Aplica para todos los autos de la flota.',
                    'Aplica en tariga de tiempo y kilometraje.',
                    'El cliente debe complementar el alquiler con las protecciones LDW y WTC.',
                    'El cliente debe cumplir con todos los requisitos de alquiler de AVIS.'
                ],
                url: 'https://google.com'
            },
            {
                id: 2,
                bannerImg: '../img/car-rentals/corolla-banner.png',
                promotionImg: '../img/car-rentals/budget.svg',
                promotionText: '50% de descuento en todas las tarifas vigentes.',
                code: null,
                considerations: [
                    'El 50% aplica sobre la porción de tarifas.',
                    'No incluye coberturas ni impuestos.',
                    'No es válido con otras promociones o descuentos.',
                    'El cliente debe presentar el boarding pass al momento de retirar el auto.',
                    'Aplican condiciones regular de alquiler.'
                ],
                url: 'https://google.com'
            },
            {
                id: 3,
                bannerImg: '../img/car-rentals/chevrolet-banner.png',
                promotionImg: '../img/car-rentals/dollar.svg',
                promotionText: '50% de descuento sobre todas las tarifas en la web.',
                code: null,
                considerations: [
                    'No aplica para SUV, 7Packs, ni categoría comercial.',
                    'No aplica con otras promociones ni descuentos.'
                ],
                url: 'https://google.com'
            }
        ],
        infoUrl: "https://google.com"
    },
    en: {
        name: 'Car Rentals',
        bannerImg: '../img/car-rentals/banner-page.png',
        cars: [
            {
                id: 1,
                bannerImg: '../img/car-rentals/ford-banner.png',
                promotionImg: '../img/car-rentals/avis.svg',
                promotionText: '50% de descuento en la porción de tiempo y kilometraje de la tarifa de alquiler.',
                code: 'AWD O870700',
                considerations: [
                    'Aplica para todos los autos de la flota.',
                    'Aplica en tariga de tiempo y kilometraje.',
                    'El cliente debe complementar el alquiler con las protecciones LDW y WTC.',
                    'El cliente debe cumplir con todos los requisitos de alquiler de AVIS.'
                ],
                url: 'https://google.com'
            },
            {
                id: 2,
                bannerImg: '../img/car-rentals/corolla-banner.png',
                promotionImg: '../img/car-rentals/budget.svg',
                promotionText: '50% de descuento en todas las tarifas vigentes.',
                code: null,
                considerations: [
                    'El 50% aplica sobre la porción de tarifas.',
                    'No incluye coberturas ni impuestos.',
                    'No es válido con otras promociones o descuentos.',
                    'El cliente debe presentar el boarding pass al momento de retirar el auto.',
                    'Aplican condiciones regular de alquiler.'
                ],
                url: 'https://google.com'
            },
            {
                id: 3,
                bannerImg: '../img/car-rentals/chevrolet-banner.png',
                promotionImg: '../img/car-rentals/dollar.svg',
                promotionText: '50% de descuento sobre todas las tarifas en la web.',
                code: null,
                considerations: [
                    'No aplica para SUV, 7Packs, ni categoría comercial.',
                    'No aplica con otras promociones ni descuentos.'
                ],
                url: 'https://google.com'
            }
        ]
    }
};