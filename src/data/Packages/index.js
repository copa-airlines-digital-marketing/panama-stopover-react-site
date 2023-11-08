import imgMain1 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_001_principalesatracciones_333x281.jpg";
import imgMain2 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_002_principalesatracciones_333x281.jpg";
import imgMain3 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_003_principalesatracciones_333x281.jpg";
import imgMain4 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_004_principalesatracciones_333x281.jpg";
import imgMain5 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_005_principalesatracciones_333x281.jpg";
import imgMain6 from "assets/img/packages/main/CPA.1068_stopover_microsite_desktop_paquetes_006_principalesatracciones_333x281.jpg";

import imgGreen1 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_007_panamaverde_333x281.jpg";
import imgGreen2 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_008_panamaverde_333x281.jpg";
import imgGreen3 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_009_panamaverde_333x281.jpg";
import imgGreen4 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_010_panamaverde_333x281.jpg";
import imgGreen5 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_011_panamaverde_333x281.jpg";
import imgGreen6 from "assets/img/packages/green/CPA.1068_stopover_microsite_desktop_paquetes_012_panamaverde_333x281.jpg";

import imgAct1 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_016_cultura_333x281.jpg";
import imgAct2 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_014_cultura_333x281.jpg";
import imgAct3 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_017_cultura_333x281.jpg";
import imgAct4 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_013_cultura_333x281.jpg";
import imgAct5 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_015_cultura_333x281.jpg";
import imgAct6 from "assets/img/packages/activities/CPA.1068_stopover_microsite_desktop_paquetes_018_cultura_333x281.jpg";


const data = {
  es: {
    slug: "paquetes",
    title: "Paquetes",
    subtitle:
      "Sabemos que tu tiempo vale oro, por eso te ofrecemos una variedad de paquetes que se adaptan a tu estadía. Selecciona la cantidad de días que vas a quedarte y elige uno a tu medida.",
    bioDisclaimer:
      "En Panamá se han implementado los protocolos de bioseguridad necesarios para que disfrutes con tranquilidad. <a href='https://www.visitpanama.com/es/informacion/protocolos-de-viaje/' target='_blank'><strong>Conoce más aquí</strong></a>.",
    data_1: "Selecciona las noches",
    data_2: "Selecciona la categoría",
    tab1: "Principales atracciones",
    tab2: "Panamá Verde",
    tab3: "Actividades Culturales",
    list_prices: ["Básico", "Comfort", "Premium"],
    tabs: [
      {
        identifier: "0",
        title: "Canal de Panamá",
        slug: "canal-de-panama",
        category: "Principales Atracciones",
        img: imgMain1,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "1",
        title: "Ciudad de Panamá",
        slug: "ciudad-de-panama",
        category: "Principales Atracciones",
        img: imgMain2,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "2",
        title: "Casco Antiguo",
        slug: "casco-antiguo",
        category: "Principales Atracciones",
        img: imgMain3,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "3",
        title: "Calzada de Amador",
        slug: "calzada-de-amador",
        category: "Principales Atracciones",
        img: imgMain4,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "4",
        title: "Valle de Antón",
        slug: "valle-de-anton",
        category: "Principales Atracciones",
        img: imgMain5,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "5",
        title: "Compras",
        slug: "compras",
        category: "Principales Atracciones",
        img: imgMain6,
        slug_type: "main",
        status: false,
      },
      //green
      {
        identifier: "6",
        title: "Islas y playas",
        slug: "islas-y-playas",
        category: "Panamá Verde",
        img: imgGreen1,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "7",
        title: "Selvas",
        slug: "selvas",
        category: "Panamá Verde",
        img: imgGreen2,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "8",
        title: "Parques",
        slug: "parques",
        category: "Panamá Verde",
        img: imgGreen3,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "9",
        title: "Actividades acuáticas",
        slug: "actividades-acuaticas",
        category: "Panamá Verde",
        img: imgGreen4,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "10",
        title: "Ríos y cascadas",
        slug: "rios-y-cascadas",
        category: "Panamá Verde",
        img: imgGreen5,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "11",
        title: "Flora y fauna",
        slug: "flora-y-fauna",
        category: "Panamá Verde",
        img: imgGreen6,
        slug_type: "green",
        status: false,
      },
      //culturale_activity
      {
        identifier: "12",
        title: "Comunidades Indígenas",
        slug: "comunidades-indigenas",
        category: "Actividades culturales",
        img: imgAct1,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "13",
        title: "Gastronomía auténtica",
        slug: "gastronomia-autentica",
        category: "Actividades culturales",
        img: imgAct2,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "14",
        title: "Shows folklóricos",
        slug: "shows-folkloricos",
        category: "Actividades culturales",
        img: imgAct3,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "15",
        title: "Museos",
        slug: "museos",
        category: "Actividades culturales",
        img: imgAct4,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "16",
        title: "Ruinas",
        slug: "ruinas",
        category: "Actividades culturales",
        img: imgAct5,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "17",
        title: "Artesanías",
        slug: "artesanias",
        category: "Actividades culturales",
        img: imgAct6,
        slug_type: "activities",
        status: false,
      },
    ],
    gallerys: [
      {
        name: "Allegro Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria02_1088x690.jpg",
          /* "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria03_1088x690.jpg", */
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Aventuras 2000",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/002_Aventuras2000/CPA.1068_stopover_microsite_mobile_paquetes_02aventuras2000_galeria01_768x816.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/002_Aventuras2000/CPA.1068_stopover_microsite_mobile_paquetes_02aventuras2000_galeria02_768x816.jpg",
        ],
      },
      {
        name: "Bongo Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Panamá Crucero Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Panamá Natural",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Retransfer Panamá (Reluxus Tours)",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria05_1088x690.jpg",
        ],
      },
      /* {
        name: "Robles Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria02_1088x690.jpg",
          /* "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria05_1088x690.jpg",
        ],
      }, */
      {
        name: "Viajes Jazmine",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Xplore Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Scuba Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Aventuras Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Arians Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_mobile_paquetes_masthead_01_ariantours_768x557.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_mobile_paquetes_masthead_02_ariantours_768x557.jpg",
        ],
      },
      {
        name: "Hover Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_mobile_hover_tours_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_mobile_hover_tours_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_mobile_hover_tours_gallery_03_768x816.png",
        ],
      },
      {
        name: "Grand Tours CRT, INC",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_mobile_grand_tours_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_mobile_grand_tours_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_mobile_grand_tours_gallery_03_768x816.png",
        ],
      },
      {
        name: "Ecocircuitos Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_mobile_ecocircuitos_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_mobile_ecocircuitos_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_mobile_ecocircuitos_gallery_03_768x816.png",
        ],
      },
      {
        name: "Ancon Expeditions",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_mobile_ancon_expedition_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_mobile_ancon_expedition_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_mobile_ancon_expedition_gallery_03_768x816.png",
        ],
      },
      {
        name: "Arco Iris",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_mobile_arcoiris_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_mobile_arcoiris_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_mobile_arcoiris_gallery_03_768x816.png",
        ],
      },
      {
        name: "San Blas Dreams",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_mobile_san_blas_dreams_gallery_01_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_mobile_san_blas_dreams_gallery_02_768x816.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_mobile_san_blas_dreams_gallery_03_768x816.png",
        ],
      },
      {
        name: "Panamá al Natural",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria03_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria04_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria05_1088x690.png"
        ],
      },
    ],
  },
  en: {
    slug: "paquetes",
    title: "Packages",
    subtitle:
      "We know that your time is worth gold, so we offer you a variety of packages that adapt to your stay. Select the number of days you are going to stay and choose one that suits you.",
    bioDisclaimer:
      "<p>Panama biosafety protocols have been implemented so that you can enjoy with peace of mind. <a href='https://www.visitpanama.com/information/travel-guidelines/' target='_blank'><strong>Learn more here</strong></a>.</p>",
    data_1: "Select nights",
    data_2: "Select category",
    tab1: "Main attractions",
    tab2: "Green Panama",
    tab3: "Cultural activities",
    list_prices: ["Basic", "Comfort", "Premium"],
    tabs: [
      {
        identifier: "0",
        title: "Panama Canal",
        slug: "canal-de-panama",
        category: "Principales Atracciones",
        img: imgMain1,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "1",
        title: "Panama City",
        slug: "ciudad-de-panama",
        category: "Principales Atracciones",
        img: imgMain2,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "2",
        title: "Casco Antiguo",
        slug: "casco-antiguo",
        category: "Principales Atracciones",
        img: imgMain3,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "3",
        title: "Amador Causeway",
        slug: "calzada-de-amador",
        category: "Principales Atracciones",
        img: imgMain4,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "4",
        title: "Anton Valley",
        slug: "valle-de-anton",
        category: "Principales Atracciones",
        img: imgMain5,
        slug_type: "main",
        status: false,
      },
      {
        identifier: "5",
        title: "Shopping",
        slug: "compras",
        category: "Principales Atracciones",
        img: imgMain6,
        slug_type: "main",
        status: false,
      },
      //green
      {
        identifier: "6",
        title: "Islands and beaches",
        slug: "islas-y-playas",
        category: "Panamá Verde",
        img: imgGreen1,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "7",
        title: "Jungles",
        slug: "selvas",
        category: "Panamá Verde",
        img: imgGreen2,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "8",
        title: "Parks",
        slug: "parques",
        category: "Panamá Verde",
        img: imgGreen3,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "9",
        title: "Water activities",
        slug: "actividades-acuaticas",
        category: "Panamá Verde",
        img: imgGreen4,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "10",
        title: "Rivers and waterfalls",
        slug: "rios-y-cascadas",
        category: "Panamá Verde",
        img: imgGreen5,
        slug_type: "green",
        status: false,
      },
      {
        identifier: "11",
        title: "Flora and fauna",
        slug: "flora-y-fauna",
        category: "Panamá Verde",
        img: imgGreen6,
        slug_type: "green",
        status: false,
      },
      //culturale_activity
      {
        identifier: "12",
        title: "Indigenous Communities",
        slug: "comunidades-indigenas",
        category: "Actividades culturales",
        img: imgAct1,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "13",
        title: "Authentic gastronomy",
        slug: "gastronomia-autentica",
        category: "Actividades culturales",
        img: imgAct2,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "14",
        title: "Folkloric shows",
        slug: "shows-folkloricos",
        category: "Actividades culturales",
        img: imgAct3,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "15",
        title: "Museums",
        slug: "museos",
        category: "Actividades culturales",
        img: imgAct4,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "16",
        title: "Ruins",
        slug: "ruinas",
        category: "Actividades culturales",
        img: imgAct5,
        slug_type: "activities",
        status: false,
      },
      {
        identifier: "17",
        title: "Handicrafts",
        slug: "artesanias",
        category: "Actividades culturales",
        img: imgAct6,
        slug_type: "activities",
        status: false,
      },
    ],
    gallerys: [
      {
        name: "Allegro Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria02_1088x690.jpg",
          /* "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria03_1088x690.jpg", */
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/001_AllegroTours/CPA.1068_stopover_microsite_desktop_paquetes_01allegro_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Aventuras 2000",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/002_Aventuras2000/CPA.1068_stopover_microsite_desktop_paquetes_02aventuras2000_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/002_Aventuras2000/CPA.1068_stopover_microsite_desktop_paquetes_02aventuras2000_galeria04_1088x690.jpg",
        ],
      },
      {
        name: "Bongo Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/003_BongoTours/CPA.1068_stopover_microsite_desktop_paquetes_03bongotours_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Panamá Crucero Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/004_PanamaCruceroTours/CPA.1068_stopover_microsite_desktop_paquetes_04panamacrucerotours_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Panamá Natural",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/005_PanamaNatural/CPA.1068_stopover_microsite_desktop_paquetes_05panamanatural_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Retransfer Panamá (Reluxus Tours)",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/006_RetransferPanama/CPA.1068_stopover_microsite_desktop_paquetes_06retransfer_galeria05_1088x690.jpg",
        ],
      },
      /* {
        name: "Robles Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria02_1088x690.jpg",
          /* "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/007_RoblesTours/CPA.1068_stopover_microsite_desktop_paquetes_07robles_galeria05_1088x690.jpg",
        ],
      }, */
      {
        name: "Viajes Jazmine",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/008_ViajesJazmine/CPA.1068_stopover_microsite_desktop_paquetes_08jazmine_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Xplore Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/009_XplorePanama/CPA.1068_stopover_microsite_desktop_paquetes_09xplore_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Scuba Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/010_Scuba/CPA.1068_stopover_microsite_desktop_paquetes_010scuba_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Aventuras Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/011_AventurasPanama/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Arians Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria01_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria02_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria03_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria04_1088x690.jpg",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/012_AriansTours/CPA.1068_stopover_microsite_desktop_paquetes_011aventuraspanama_galeria05_1088x690.jpg",
        ],
      },
      {
        name: "Hover Tours",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_desktop_hover_tours_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_desktop_hover_tours_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/013_HoverTours/CPA.1286_stopover_microsite_desktop_hover_tours_gallery_03_1088x690.png",
        ],
      },
      {
        name: "Grand Tours CRT, INC",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_desktop_grand_tours_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_desktop_grand_tours_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/014_GrandTours/CPA.1286_stopover_microsite_desktop_grand_tours_gallery_03_1088x690.png",
        ],
      },
      {
        name: "Ecocircuitos Panamá",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_desktop_ecocircuitos_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_desktop_ecocircuitos_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/015_EcocircuitosPanama/CPA.1286_stopover_microsite_desktop_ecocircuitos_gallery_03_1088x690.png",
        ],
      },
      {
        name: "Ancon Expeditions",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_desktop_ancon_expedition_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_desktop_ancon_expedition_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/016_AnconExpeditions/CPA.1286_stopover_microsite_desktop_ancon_expedition_gallery_03_1088x690.png",
        ],
      },
      {
        name: "Arco Iris",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_desktop_arcoiris_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_desktop_arcoiris_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/017_ArcoIris/CPA.1286_stopover_microsite_desktop_arcoiris_gallery_03_1088x690.png",
        ],
      },
      {
        name: "San Blas Dreams",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_desktop_san_blas_dreams_gallery_01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_desktop_san_blas_dreams_gallery_02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/018_SanBlasDreams/CPA.1286_stopover_microsite_desktop_san_blas_dreams_gallery_03_1088x690.png",
        ],
      },
      {
        name: "Panamá al Natural",
        gallery: [
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria01_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria02_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria03_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria04_1088x690.png",
          "https://phpstack-685265-3053015.cloudwaysapps.com/storage/img/packages/PanamaNatural/CPA.1420_stopover_microsite_desktop_paquetes_05panamanatural_galeria05_1088x690.png"
        ],
      },
    ],
  },
};

export default data;