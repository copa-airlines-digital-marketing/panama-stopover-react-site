import imgSlider1 from "assets/img/sliders/slider-001.png";
import imgSlider2 from "assets/img/sliders/slider-002.png";
import logoSello from "assets/img/logosello.png";
import logoSelloEs from "assets/img/logosello-es.png";

import imgConoceCiudad from "assets/img/conoce/img-ciudad.png";
import imgConoceCultura from "assets/img/conoce/img-cultura.png";
import imgConoceGastronomia from "assets/img/conoce/img-gastronomia.png";
import imgConoceNaturaleza from "assets/img/conoce/img-naturaleza.png";
import imgConocePlayas from "assets/img/conoce/img-playas.png";
import imgConoceVidaNocturna from "assets/img/conoce/img-vida-nocturna.png";

import imgConoceStopOver from "assets/img/conoce-page/stopover_1_dia_1920x540.png";

import stepOverIconLanguage from "assets/img/stopovers_icons/conversation.svg";
import stepOverIconCurrency from "assets/img/stopovers_icons/save-money.svg";
import stepOverIconWeather from "assets/img/stopovers_icons/sun.svg";
import stepOverIconTransport from "assets/img/stopovers_icons/taxi.svg";

import imgItinerary1 from "assets/img/stopovers/02-skylines-cascade.png";
import imgItinerary2 from "assets/img/stopovers/02-skylines-cascade.png";
import imgItinerary3 from "assets/img/stopovers/03-canal-cascade.png";
import imgItinerary4 from "assets/img/stopovers/02-skylines-cascade.png";
import imgItinerary5 from "assets/img/stopovers/02-skylines-cascade.png";

import imgTour1 from "assets/img/tours/tours-a-isla-iguana-panama-al-natural.png";
import imgTour2 from "assets/img/tours/Sendero-El-Charco-004.png";
import imgTour3 from "assets/img/tours/Image-5.png";
import imgTour4 from "assets/img/tours/Image-5.png";
import imgTour5 from "assets/img/tours/Image-5.png";
import imgTour6 from "assets/img/tours/Image-5.png";

import video1 from "video/Chrome_ImF.mp4";
import video2 from "video/oceans.mp4";

export default {
  es: {
    slug: "inicio",
    carousel: [
      {
        title: "Panamá",
        subtitle: "stopover",
        type: "simple",
        img: imgSlider1,
        logo: logoSelloEs,
        text: "Es poder disfrutar dos destinos increíbles por el precio de uno. Agrega una experiencia a tu viaje y conoce Panamá, ¡Gratis!",
        subtext: "",
        terms: "*Aplica para Ecuador, Colombia, Perú y Costa Rica.",
        btn_name: "LLAMA AHORA Y RESERVA",
        btn_url: "https://www.google.com/",
      },
      {
        title: "Panamá",
        subtitle: "Colombia",
        type: "complex",
        img: imgSlider2,
        logo: logoSelloEs,
        text: "EN 1903 LA NACION COLOMBIANA SE DECLARA EN SE SEPARA DE PANAMA Y LLEGA A SER UNA GRAN MUNDIAL PAIS",
        subtext: "CONOCE DOS DESTINOS INCREILBES CON MUCHO EN COMUN",
        terms: "",
        btn_name: "LLAMA AHORA Y RESERVA",
        btn_url: "https://www.google.com/",
      },
    ],
    submenu_home: [
      {
        identifier: "como-hacer-stopover",
        href: "#anchor_stopover",
        title: "CÓMO HACER STOPOVER",
      },
      {
        identifier: "conoce-panama",
        href: "#anchor_conoce_panama",
        title: "CONOCE PANAMÁ",
      },
      {
        identifier: "crea-tu-itinerario",
        href: "#anchor_itinerary",
        title: "CREA TU ITINERARIO",
      },
    ],
    know_panama: [
      {
        title: "Conoce Panamá",
        subtitle:
          "Panamá es un destino de película que lo tiene todo, y tú escribes el guion. Encuentra paraísos escondidos, cientos de islas desiertas y un equilibrio perfecto entre tradición y modernidad. Adéntrate en una selva y conoce una tribu o disfruta de vistas espectaculares desde sus rascacielos, mientras pruebas sus sabores únicos y variados.",
        extra_title: "Bienvenido a Panamá, elige tu propia experiencia.",
        btn_name: "VOLVER",
        options: [
          {
            id: "1",
            image: imgConoceCultura,
            slug_parent: "conoce-panama",
            slug: "cultura",
            title: "Cultura",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            list: [
              {
                title: "cultura 1",
                subtitle:
                  "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                image: imgConoceCiudad,
              },
              {
                title: "cultura 22",
                subtitle:
                  "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                image: imgConocePlayas,
              },
            ],
          },
          {
            id: "2",
            image: imgConocePlayas,
            slug_parent: "conoce-panama",
            slug: "playas",
            title: "Playas",
            btn: "VÉR MÁS",
            summary:
              "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
            content:
              "FIFA World Player of the Year award by record voting margins.",
          },
          {
            id: "3",
            image: imgConoceCiudad,
            slug_parent: "conoce-panama",
            slug: "ciudad",
            title: "Ciudad",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "4",
            image: imgConoceVidaNocturna,
            slug_parent: "conoce-panama",
            slug: "vida-nocturna",
            title: "Vida Nocturna",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "5",
            image: imgConoceNaturaleza,
            slug_parent: "conoce-panama",
            slug: "naturaleza",
            title: "Naturaleza",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "6",
            image: imgConoceGastronomia,
            slug_parent: "conoce-panama",
            slug: "gastronomia",
            title: "Gastronomía",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
    ],
    how_to_stopover: [
      {
        title_page: "¿Cómo hacer Stopover?",
        copryright_1: "Mira aquí los ",
        copryright_link: "Términos y Condiciones",
        copryright_2: " que aplican para hacer Stopover.",
        sticky_title: "CREA TU ITINERARIO",
        sticky_link: "#anchor_itinerary",
        sticky_call: " 0800 555 485586",
        sticky_cta: "LLAMA AHORA",
        sticky_btn: "RESERVA AQUI",
        steps: [
          {
            identifier: "1",
            title: "Elige tu tiempo de estadía",
            text: "Cuando llames para comprar tu boleto, selecciona los días que quieres quedarte en Panamá, sin costo adicional en la tarifa. El Stopover puede ser de más de 1 día (más de 24 horas) a 7 días.",
            link: "Ver requisitos de viaje",
            url: "xxxxxxx",
          },
          {
            identifier: "2",
            title: "Reserva tu Stopover",
            text: "El Stopover te permite hacer 1 parada sin cargo en Panamá. Si quieres hacer 2 paradas, a la ida y a la vuelta, se aplican cargos adicionales. Llama para obtener más información, nuestros operadores podrán ayudarte.",
            link: "Llama aquí",
            url: "xxxxxxxxxxx",
          },
          {
            identifier: "3",
            title: "Disfruta de tus vacaciones en Panamá y continúa tu viaje",
            text: "Recorre nuestro bello país y sigue tu viaje hacia Colombia, Perú, Ecuador o Costa Rica.",
            link: "aquí",
            url: "",
          },
        ],
        about_stop: [
          {
            subtitle_page: "Lo que debes saber",
            sub_text_page:
              "Información importante para tener en cuenta cuando estés en Panamá.",
            icons: [
              {
                identifier: "1",
                title: "Idioma",
                text: "Español",
                img: stepOverIconLanguage,
              },
              {
                identifier: "2",
                title: "Moneda",
                text: "Dolar / Balboa",
                img: stepOverIconCurrency,
              },
              {
                identifier: "3",
                title: "Clima",
                text: "Tropical",
                img: stepOverIconWeather,
              },
              {
                identifier: "4",
                title: "Transporte",
                text: "Buses urbanos - Taxis - Uber",
                img: stepOverIconTransport,
              },
            ],
          },
        ],
      },
    ],
    itinerary: [
      {
        title: "Crea tu itinerario",
        subtitle:
          "Elige la cantidad de días que vas a quedarte y te damos distintas opciones para descubrir Panamá.",
        placeholder: "Selecciona las noches",
        btn_name: "VER ITINERARIO",
        itinerary_list: [
          {
            identifier: "1",
            video_url: video2,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            btn: "See more",
            btn_all: "See all",
            btn_tour: "TOURS AND PACKAGES",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary2,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
              // {
              //     identifier: "4",
              //     title: "xxxxxxxxx",
              //     text: "cccccccccccccccccccccc",
              //     img: imgItinerary4,
              //     url: ""
              // },
              // {
              //     identifier: "5",
              //     title: "yyyyyyyyyyyyyy",
              //     text: "uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
              //     img: imgItinerary5,
              //     url: ""
              // }
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Biomuseo",
                slug_parent: "tour",
                slug: "biomuseo",
                text: "1 day tours",
                img: imgTour1,
                url: "",
              },
              {
                identifier: "2",
                title: "iMazx",
                slug_parent: "tour",
                slug: "imazx",
                text: "1 day tours",
                img: imgTour2,
                url: "",
              },
              {
                identifier: "3",
                title: "Bartza",
                slug_parent: "tour",
                slug_current: "bartza",
                text: "1 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Salomon",
                slug_parent: "tour",
                slug: "salomon",
                text: "Tours de 3 día",
                img: imgTour4,
                url: "",
              },
              {
                identifier: "5",
                title: "Durotyu",
                slug_parent: "tour",
                slug: "durotyu",
                text: "1 day tours",
                img: imgTour5,
                url: "",
              },
              {
                identifier: "6",
                title: "Gerurd",
                slug_parent: "tour",
                slug: "gerurd",
                text: "1 day tours",
                img: imgTour6,
                url: "",
              },
            ],
          },
          {
            identifier: "2",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "3",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary2,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
            ],
            tour_title: "3 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "4",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "4 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "5",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary2,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
            ],
            tour_title: "5 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "6",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary2,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "7",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "7 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    slug: "home",
    carousel: [
      {
        title: "Panamá",
        subtitle: "stopover",
        type: "simple",
        img: imgSlider1,
        logo: logoSello,
        text: "It is to be able to enjoy two incredible destinations for the price of one. Add an experience to your trip and get to know Panama, Free!",
        terms: "* Applies to Ecuador, Colombia, Peru and Costa Rica.",
        btn_name: "CALL NOW AND BOOK",
        btn_url: "https://www.google.com/",
      },
      {
        title: "Panamá",
        subtitle: "Colombia",
        type: "complex",
        img: imgSlider2,
        logo: logoSello,
        text: "It is to be able to enjoy two incredible destinations for the price of one. Add an experience to your trip and get to know Panama, Free!",
        terms: "* Applies to Ecuador, Colombia, Peru and Costa Rica.",
        btn_name: "CALL NOW AND BOOK",
        btn_url: "https://www.google.com/",
      },
    ],
    submenu_home: [
      {
        identifier: "como-hacer-stopover",
        href: "#anchor_stopover",
        title: "CÓMO HACER STOPOVER",
      },
      {
        identifier: "conoce-panama",
        href: "#anchor_conoce_panama",
        title: "CONOCE PANAMÁ",
      },
      {
        identifier: "crea-tu-itinerario",
        href: "#anchor_itinerary",
        title: "CREA TU ITINERARIO",
      },
    ],
    know_panama: [
      {
        title: "Conoce Panamá",
        subtitle:
          "Panamá es un destino de película que lo tiene todo, y tú escribes el guion. Encuentra paraísos escondidos, cientos de islas desiertas y un equilibrio perfecto entre tradición y modernidad. Adéntrate en una selva y conoce una tribu o disfruta de vistas espectaculares desde sus rascacielos, mientras pruebas sus sabores únicos y variados.",
        extra_title: "Bienvenido a Panamá, elige tu propia experiencia.",
        btn_name: "VOLVER",
        options: [
          {
            id: "1",
            image: imgConoceCultura,
            slug_parent: "conoce-panama",
            slug: "cultura",
            title: "Cultura",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            list: [
              {
                title: "cultura 1",
                subtitle:
                  "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                image: imgConoceCiudad,
              },
              {
                title: "cultura 22",
                subtitle:
                  "la cultural dae ad ffd sgdgfh fgdh gfh fgh fgh fgh dfghdfhd fhjkhgfjdgf jd",
                image: imgConocePlayas,
              },
            ],
          },
          {
            id: "2",
            image: imgConocePlayas,
            slug_parent: "conoce-panama",
            slug: "playas",
            title: "Playas",
            btn: "VÉR MÁS",
            summary:
              "Islas vírgenes, Mar Caribe, aguas turquesas y arena blanca: el paraíso está aquí",
            content:
              "FIFA World Player of the Year award by record voting margins.",
          },
          {
            id: "3",
            image: imgConoceCiudad,
            slug_parent: "conoce-panama",
            slug: "ciudad",
            title: "Ciudad",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "4",
            image: imgConoceVidaNocturna,
            slug_parent: "conoce-panama",
            slug: "vida-nocturna",
            title: "Vida Nocturna",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "5",
            image: imgConoceNaturaleza,
            slug_parent: "conoce-panama",
            slug: "naturaleza",
            title: "Naturaleza",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: "6",
            image: imgConoceGastronomia,
            slug_parent: "conoce-panama",
            slug: "gastronomia",
            title: "Gastronomía",
            btn: "VÉR MÁS",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
    ],
    how_to_stopover: [
      {
        title_page: "¿Cómo hacer Stopover?",
        copryright_1: "Mira aquí los ",
        copryright_link: "Términos y Condiciones",
        copryright_2: " que aplican para hacer Stopover.",
        sticky_title: "CREA TU ITINERARIO",
        sticky_link: "#anchor_itinerary",
        sticky_call: " 0800 555 485586",
        sticky_cta: "LLAMA AHORA",
        sticky_btn: "RESERVA AQUI",
        steps: [
          {
            identifier: "1",
            title: "Elige tu tiempo de estadía",
            text: "Cuando llames para comprar tu boleto, selecciona los días que quieres quedarte en Panamá, sin costo adicional en la tarifa. El Stopover puede ser de más de 1 día (más de 24 horas) a 7 días.",
            link: "Ver requisitos de viaje",
            url: "xxxxxxx",
          },
          {
            identifier: "2",
            title: "Reserva tu Stopover",
            text: "El Stopover te permite hacer 1 parada sin cargo en Panamá. Si quieres hacer 2 paradas, a la ida y a la vuelta, se aplican cargos adicionales. Llama para obtener más información, nuestros operadores podrán ayudarte.",
            link: "Llama aquí",
            url: "xxxxxxxxxxx",
          },
          {
            identifier: "3",
            title: "Disfruta de tus vacaciones en Panamá y continúa tu viaje",
            text: "Recorre nuestro bello país y sigue tu viaje hacia Colombia, Perú, Ecuador o Costa Rica.",
            link: "aquí",
            url: "",
          },
        ],
        about_stop: [
          {
            subtitle_page: "Lo que debes saber",
            sub_text_page:
              "Información importante para tener en cuenta cuando estés en Panamá.",
            icons: [
              {
                identifier: "1",
                title: "Idioma",
                text: "Español",
                img: stepOverIconLanguage,
              },
              {
                identifier: "2",
                title: "Moneda",
                text: "Dolar / Balboa",
                img: stepOverIconCurrency,
              },
              {
                identifier: "3",
                title: "Clima",
                text: "Tropical",
                img: stepOverIconWeather,
              },
              {
                identifier: "4",
                title: "Transporte",
                text: "Buses urbanos - Taxis - Uber",
                img: stepOverIconTransport,
              },
            ],
          },
        ],
      },
    ],
    itinerary: [
      {
        title: "Crea tu itinerario",
        subtitle:
          "Elige la cantidad de días que vas a quedarte y te damos distintas opciones para descubrir Panamá.",
        placeholder: "Selecciona las noches",
        btn_name: "VER ITINERARIO",
        itinerary_list: [
          {
            identifier: "1",
            video_url: video2,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            btn: "See more",
            btn_all: "See all",
            btn_tour: "TOURS AND PACKAGES",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary2,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: imgItinerary3,
                url: "",
              },
              {
                identifier: "4",
                title: "xxxxxxxxx",
                text: "cccccccccccccccccccccc",
                img: imgItinerary4,
                url: "",
              },
              {
                identifier: "5",
                title: "yyyyyyyyyyyyyy",
                text: "uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
                img: imgItinerary5,
                url: "",
              },
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Biomuseo",
                slug_parent: "tour",
                slug: "biomuseo",
                text: "1 day tours",
                img: imgTour1,
                url: "",
              },
              {
                identifier: "2",
                title: "iMazx",
                slug_parent: "tour",
                slug: "imazx",
                text: "1 day tours",
                img: imgTour2,
                url: "",
              },
              {
                identifier: "3",
                title: "Bartza",
                slug_parent: "tour",
                slug_current: "bartza",
                text: "1 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Salomon",
                slug_parent: "tour",
                slug: "salomon",
                text: "Tours de 3 día",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "5",
                title: "Durotyu",
                slug_parent: "tour",
                slug: "durotyu",
                text: "1 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "6",
                title: "Gerurd",
                slug_parent: "tour",
                slug: "gerurd",
                text: "1 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "2",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "3",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "3 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "4",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "4 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "5",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "5 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "6",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "1 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
          {
            identifier: "7",
            title: "Create your itinerary",
            subtitle:
              "Choose the number of days you are going to stay and we give you different options to discover Panama.",
            placeholder: "Select the days",
            btn_name: "SEE ITINERARY",
            video_url: video1,
            video_img: imgConoceStopOver,
            video_text: "All you can do in Panama in one day",
            intro_title: "Stopover de 1 noche",
            intro_subtitle:
              "You have 24 hours to know the most prominent places and take the best memories of Panama. Below, you will find an itinerary for you to discover the best of Panama:",
            stopovers_list: [
              {
                identifier: "1",
                title: "Casco Antiguo",
                text: "A beautiful colonial area, recognized as a World Heritage Site by UNESCO in 1997. Discover its colorful buildings and picturesque streets full of creativity and art in every corner.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "2",
                title: "Skylines en Panamá",
                text: "Panama has become the “city of skyscrapers” in Latin America. Some of them are among the tallest skyscrapers in the world. Its buildings certainly represent a new urban landscape in the country, with incredible views that leave anyone breathless.",
                img: imgItinerary1,
                url: "",
              },
              {
                identifier: "3",
                title: "Canal de Panamá",
                text: "Officially opened in 1904 with the Ancon steam, it is one of the wonders of the modern world that links the Pacific Ocean with the Atlantic Ocean. You can watch it from the Miraflores, Pedro Miguel and Agua Clara locks. The Canal has 144 sea routes, 160 user countries and 1700 connected ports.",
                img: "./img/stopovers/03-canal-cascade.png",
                url: "",
              },
            ],
            tour_title: "7 day tours",
            tour_subtitle_left:
              "Choose the one-day tour that you like most among the options we have for you and receive excellent offers and discounts.",
            tour_subtitle_right:
              "We have everything ready for your visit to Panama to be an incredible experience.",
            tours_list: [
              {
                identifier: "1",
                title: "Bartza",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "2",
                title: "Salomon",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "3",
                title: "Durotyu",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
              {
                identifier: "4",
                title: "Gerurd",
                text: "2 day tours",
                img: imgTour3,
                url: "",
              },
            ],
          },
        ],
      },
    ],
  },
};
