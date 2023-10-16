export default {
    es: {
        info: [
            {
                slug: 'conoce-panama',
                title: "Conoce Panamá",
                hero: "../img/sliders/slider-001.png",
                subtitle: "Panamá es un destino de película que lo tiene todo, y tú escribes el guion. Encuentra paraísos escondidos, cientos de islas desiertas y un equilibrio perfecto entre tradición y modernidad. Adéntrate en una selva y conoce una tribu o disfruta de vistas espectaculares desde sus rascacielos, mientras pruebas sus sabores únicos y variados.",
                extra_title: "Bienvenido a Panamá, elige tu propia experiencia.",
                btn_name: "VOLVER",
            }
        ],
        know_panama: [
            {
                title: "Conoce Panamá",
                subtitle: "Panamá es un destino de película que lo tiene todo, y tú escribes el guion. Encuentra paraísos escondidos, cientos de islas desiertas y un equilibrio perfecto entre tradición y modernidad. Adéntrate en una selva y conoce una tribu o disfruta de vistas espectaculares desde sus rascacielos, mientras pruebas sus sabores únicos y variados.",
                extra_title: "Bienvenido a Panamá, elige tu propia experiencia.",
                btn_name: "VOLVER",
                options: [
                    {
                        id: "1",
                        image: "../img/conoce/img-cultura.png",
                        slug_parent: "conoce-panama",
                        slug: "cultura",
                        title: "Cultura",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        list: [
                            {
                                "title": "cultura 1",
                                "subtitle": "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                                "image": "../img/conoce/img-ciudad.png"
                            },
                            {
                                "title": "cultura 22",
                                "subtitle": "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                                "image": "../img/conoce/img-playas.png"
                            }
                        ]
                    },
                    {
                        id: "2",
                        image: "../img/conoce/img-playas.png",
                        slug_parent: "conoce-panama",
                        slug: "playas",
                        title: "Playas",
                        btn: "VER MÁS",
                        summary: "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
                        content: "FIFA World Player of the Year award by record voting margins."
                    },
                    {
                        id: "3",
                        image: "../img/conoce/img-ciudad.png",
                        slug_parent: "conoce-panama",
                        slug: "ciudad",
                        title: "Ciudad",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "4",
                        image: "../img/conoce/img-vida-nocturna.png",
                        slug_parent: "conoce-panama",
                        slug: "vida-nocturna",
                        title: "Vida Nocturna",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "5",
                        image: "../img/conoce/img-naturaleza.png",
                        slug_parent: "conoce-panama",
                        slug: "naturaleza",
                        title: "Naturaleza",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "6",
                        image: "../img/conoce/img-gastronomia.png",
                        slug_parent: "conoce-panama",
                        slug: "gastronomia",
                        title: "Gastronomía",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                ]
            }
        ],
        welcome: [
            {
                title: "Cultura",
                type: "cultura",
                info_extra: 'Descubre algunas de las culturas más hermosas del continente americano. "Los amantes del surf, la arena y el sol encontrarán un paraíso en sus diversas playas e islas en el Mar Caribe y en el Océano Pacífico."',
            },
            {
                title: "Playas",
                info_extra: 'Descubre algunas de las plyas más hermosas del continente americano. "Los amantes del surf, la arena y el sol encontrarán un paraíso en sus diversas playas e islas en el Mar Caribe y en el Océano Pacífico."',
                type: "playas",
            }
        ],
        list: [
            {
                id: "1",
                image: "../img/cultura/2-1.png",
                hero: "../img/cultura/2-1.png",
                title: "Cultura de 1",
                type: "cultura",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "culture-1",
                btn: "VER MÁS",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                id: "2",
                image: "../img/cultura/2-2.png",
                hero: "../img/cultura/2-2.png",
                title: "Cultura de 2",
                type: "cultura",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "culture-2",
                btn: "VER MÁS",
                summary: "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
                content: "FIFA World Player of the Year award by record voting margins."
            },
            {
                id: "3",
                image: "../img/cultura/2-3.png",
                hero: "../img/cultura/2-3.png",
                type: "cultura",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "culture-3",
                title: "Cultura de 3",
                btn: "VER MÁS",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                id: "1",
                image: "../img/cultura/2-1.png",
                type: "playas",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "playas-1",
                title: "playas de 1",
                btn: "VER MÁS",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                id: "2",
                image: "../img/cultura/2-2.png",
                type: "playas",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "playas-2",
                title: "playas de 2",
                btn: "VER MÁS",
                summary: "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
                content: "FIFA World Player of the Year award by record voting margins."
            },
            {
                id: "3",
                image: "../img/cultura/2-3.png",
                type: "playas",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "playas-3",
                title: "playas de 3",
                btn: "VER MÁS",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        ],
        detail: [
            {
                id: "1",
                hero: "../../img/cultura/2-1.png",
                title: "Cultura de 1",
                subtitle: "La mejor cultura del mundo",
                type: "cultura",
                slug_parent: "conoce-panama",
                slug_child: "cultura",
                slug: "culture-1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                did_you_know_img: "../../img/cultura/2-1.png",
                did_you_know_title: "¿Sabias Que?",
                did_you_know_subtitle: "Playa venao",
                did_you_know_content: "Es un lugar perfecto para jugar a la pelota. Es un lugar perfecto para jugar a la pelota. Es un lugar perfecto para jugar a la pelota.",
                distance_title: "Distancia desde la ciudad: ",
                distance_content: "la playa está ubicada a 5 horas y 15 minutos del centro de la ciudad de Panamá, a 359 kilómetros. ",
                btn: "VOLVER",
                gallery: [
                    {
                        identifier: "1",
                        title: "Bartza",
                        text: "Tours de 2 día",
                        img: "../../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "2",
                        title: "Salomon",
                        text: "Tours de 2 día",
                        img: "../../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "3",
                        title: "Durotyu",
                        text: "Tours de 2 día",
                        img: "../../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "4",
                        title: "Gerurd",
                        text: "Tours de 2 día",
                        img: "../../img/tours/Image-5.png",
                        url: ""
                    }
                ]
            },
            {
                id: "2",
                type: "cultura",
                hero: "../img/cultura/2-1.png",
                title: "San Blas",
                slug: "san-blas",
                subtitle: "Consectetur adipiscing elit. Lorem ipsum",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                btn: "VOLVER",
                gallery: [
                    {
                        identifier: "1",
                        title: "Bartza",
                        text: "Tours de 2 día",
                        img: "../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "2",
                        title: "Salomon",
                        text: "Tours de 2 día",
                        img: "../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "3",
                        title: "Durotyu",
                        text: "Tours de 2 día",
                        img: "../img/tours/Image-5.png",
                        url: ""
                    },
                    {
                        identifier: "4",
                        title: "Gerurd",
                        text: "Tours de 2 día",
                        img: "../img/tours/Image-5.png",
                        url: ""
                    }
                ]
            },
        ]
    },
    en: {
        know_panama: [
            {
                slug: 'conoce-panama',
                title: "Conoce Panamá",
                hero: "./img/sliders/slider-001.png",
                subtitle: "Panamá es un destino de película que lo tiene todo, y tú escribes el guion. Encuentra paraísos escondidos, cientos de islas desiertas y un equilibrio perfecto entre tradición y modernidad. Adéntrate en una selva y conoce una tribu o disfruta de vistas espectaculares desde sus rascacielos, mientras pruebas sus sabores únicos y variados.",
                extra_title: "Bienvenido a Panamá, elige tu propia experiencia.",
                btn_name: "VOLVER",
                options: [
                    {
                        id: "1",
                        image: "../img/conoce/img-cultura.png",
                        slug_parent: "conoce-panama",
                        slug: "cultura",
                        title: "Cultura",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        list: [
                            {
                                "title": "cultura 1",
                                "subtitle": "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                                "image": "../img/conoce/img-ciudad.png"
                            },
                            {
                                "title": "cultura 22",
                                "subtitle": "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                                "image": "../img/conoce/img-playas.png"
                            }
                        ]
                    },
                    {
                        id: "2",
                        image: "../img/conoce/img-playas.png",
                        slug_parent: "conoce-panama",
                        slug: "playas",
                        title: "Playas",
                        btn: "VER MÁS",
                        summary: "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
                        content: "FIFA World Player of the Year award by record voting margins."
                    },
                    {
                        id: "3",
                        image: "../img/conoce/img-ciudad.png",
                        slug_parent: "conoce-panama",
                        slug: "ciudad",
                        title: "Ciudad",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "4",
                        image: "../img/conoce/img-vida-nocturna.png",
                        slug_parent: "conoce-panama",
                        slug: "vida-nocturna",
                        title: "Vida Nocturna",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "5",
                        image: "../img/conoce/img-naturaleza.png",
                        slug_parent: "conoce-panama",
                        slug: "naturaleza",
                        title: "Naturaleza",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        id: "6",
                        image: "../img/conoce/img-gastronomia.png",
                        slug_parent: "conoce-panama",
                        slug: "gastronomia",
                        title: "Gastronomía",
                        btn: "VER MÁS",
                        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                ],
            }
        ],
    }
};