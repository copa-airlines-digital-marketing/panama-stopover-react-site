import React, {useState, useEffect} from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";


import Hero from "./../../components/Hero";

import MainTextBlock from "./../../components/MainTextBlock";
import Gallery from "./../../components/Gallery";
import HotelFilter from "./../../components/HotelFilter";
import Map from "./../../components/Map";
import pageData from "../../data/WhereToStay";
import GoBackButton from "../../components/GoBackButton";
import "./index.scss";

const URL_BASE = "https://phpstack-685265-3053015.cloudwaysapps.com/copa-restaurant/api.php";

const tof = {"status":"ok","error":null,"data":["\r\nItaliana\r\nVegana. Vegetariana. Sin Gluten","Americana","Asi\u00e1tica","Bar\/Pub\/Cervecer\u00eda","Bar\/Pub\/Cervecer\u00eda\r\nLatina","Carnes\/Parrillada","Carnes\/Parrillada\r\nOtros","De autor","Espa\u00f1ola","Fusi\u00f3n","Fusi\u00f3n\r\nMediterr\u00e1nea","Internacional","Italiana","Latina","Latina\r\n","Latina\r\nPescados y mariscos","Mediterr\u00e1nea","Otros","Paname\u00f1a","Paname\u00f1a\r\nDe autor","Pasteler\u00eda\/ Postres","Pasteler\u00eda\/ Postres\/Cafeter\u00eda","Pasteler\u00eda\/Postres\/Cafeter\u00eda","Pescados y mariscos","Pescados y marsicos","Vegana. Vegetariana. Sin Gluten","Vegetariana. Sin Gluten","otros\r\nBar\/Pub\/Cervecer\u00eda"]};
const ress = {"status":"ok","error":null,"data":[[["\r\nItaliana\r\nVegana. Vegetariana. Sin Gluten"],"Italiana, Europea, Apto para vegetarianos","Via Porras Street | Going down in between Athanasiou and Global Bank, Ciudad de Panam\u00e1 0801","6533-6115","","Il Tula"],[["Americana"],"Americana","Urb. San francisco , Calle 68 este - Via porras #12 - Antigua CASA GALA","382 5375 "," www.preteltmeats.com","PRETELT SAN FRANCISCO"],[["Americana"],"SANDWICHES Y HAMBURGUESAS","MARBELLA","226-0333","www.rockingorilla.com","ROCK BURGER"],[["Asi\u00e1tica"],"CHINA","CL. MIGUEL BROSTELLA, C.COMERCIAL LOS TUCANAES, FRENTE A DO IT CENTER","260-1411","www.restaurantesunly.com","SUNLY"],[["Asi\u00e1tica"],"COMIDA CHINA CANTONESA","URB. INDUSTRIAL LOS ANGELES","260-4011","www.palaciolungfung.com","LUNG FUNG"],[["Asi\u00e1tica"],"China, asiatica","Calle 9a | 1 Av, Casco Viejo, Ciudad de Panam\u00e1 01819","303-0163","www.baodaipanama.com","Bao Dai"],[["Asi\u00e1tica"],"JAPONESA  ","BELA VISTA, CL. EUSEBIO A. MORALES EL CANGREJO, AL LADO DEL HOTEL HAMPTON","264-9562 \/ 47","www.matsueipanama.com","MATSUEI SUSHI BAR"],[["Asi\u00e1tica"],"Japones","Avenida Eloy Alfaro, esquina, Calle 11 Este, Panam\u00e1","6305-2335","https:\/\/casa-amazonica.negocio.site\/","Casa Amazonica"],[["Asi\u00e1tica"],"Japonesa, Asi\u00e1tica, Sushi","Avenida Eloy Alfaro con calle 11 | Edificio La Otoquena, local 3056, Ciudad de Panam\u00e1 0801","6314-4761","www.salvajepty.com","Salvaje"],[["Bar\/Pub\/Cervecer\u00eda"],"Bar, pub","Calle 9 con Calle Boquete (Esquina Casco Antiguo","392-0660","www.laranadorada.com","La Rana Dorada"],[["Bar\/Pub\/Cervecer\u00eda"],"Caf\u00e9","Casco Antiguo on Calle 1, Close to a Place Called Platea,","6157-9348","https:\/\/lamastusfamilyestates.com\/","Bajareque Coffee House"],[["Bar\/Pub\/Cervecer\u00eda"],"Cervecer\u00eda, snacks","Av Central, Bajo Boquete","6674-4246","","Boquete Brewing Company"],[["Bar\/Pub\/Cervecer\u00eda\r\nLatina"],"Caribe\u00f1a, Africana, Bar","Calle 4ta con Avenida Sur | Es el Bar & Restaurante del hotel Divers Paradise Boutique Hotel, Pueblo de Bocas, Isla Col\u00f3n 0101, Panam\u00e1","757-9767","","Pier 19"],[["Bar\/Pub\/Cervecer\u00eda\r\nLatina"],"Caribe\u00f1a, Latina, Bar","1st Street | Isla Col\u00f3n, calle primera, a lado del hosal selina, Pueblo de Bocas, Isla Col\u00f3n, Panam\u00e1","6824-3158","","Capitan Caribe"],[["Carnes\/Parrillada"],"ARGENTINA","CL. 48, ESQUINA CON CL. URUGUAY, BELLA VISTA, ","263-4469","","GAUCHOS STEAK HOUSE"],[["Carnes\/Parrillada"],"ESPECIALISTAS EN CORTES ARGENTINOS","SAN FRANCISCO, VIA CINCUENTENARIO, CALLE 4TA SUR","396-2645","www.patagoniagrillpanama.com","PATAGONIA GRILL"],[["Carnes\/Parrillada"],"PARRILLADA ARGENTINA","AV. MARINA DEL NORTE, ATRIO MALL","302-0728","www.losalocos.com","LOS A\u00d1OS LOCOS"],[["De autor"],"Cocina de autor, basada en una fusi\u00f3n entre t\u00e9cnicas europeas  combinada con la utilizaci\u00f3n, en su mayor\u00eda, de productos locales.","Ave. Central y calle 12, Casco Antiguo, Panam\u00e1, Edificio Teatro Amador. ","2121565","https:\/\/www.calioperestaurant.com","CALIOPE RESTAURANT"],[["Espa\u00f1ola"],"ESPA\u00d1OLA","Cl. 51, Bella Vista","263-9809","","CASA ALEJANDRO"],[["Espa\u00f1ola"],"ESPA\u00d1OLA","Cl. Manuel Mar\u00eda Icaza","223-7755","www.achapanama.com","CASA DEL MARISCO"],[["Fusi\u00f3n\r\nMediterr\u00e1nea"],"FUSION MEDITERR\u00c1NEA","CASCO ANTIGUO, TEATRO AMADOR, PISO 3","212-1565","www.calioperestaurant.com","REST. CALIOPE "],[["Internacional"],"INDIA","AVENIDA JUSTO AROSEMENA, PH DOLLAR, PLANTA BAJA, AVE. JUSTO AROSEMENA ENTRE CL. 44 Y 45, BELLA VISTA","225-0105 \/ 06","","MASALA INDIAN CUISINE"],[["Internacional"],"INTERNACIONAL","CAUSEWAY DE AMADOR","2113671","www.pencas.com","PENCAS"],[["Internacional"],"INTERNACIONAL","Esquina ave. B y calle 8, Casco Antiguo, Panam\u00e1","262- 4030","reception@tantahotel.com ","Tantalo Hotel Kitchen"],[["Internacional"],"INTERNACIONAL","V\u00eda Israel y Cl. 77 San Francisco, Hotel Sheraton Grand Panam\u00e1","305-5100","www.sheratongrandpanama.com","CAF\u00c9 BAH\u00cdA RESTAURANT"],[["Internacional"],"INTERNACIONAL - PERUANA","CALLE CRISANTEMOS 16, ENTRE CALLE 67 Y 68, SAN FRANCISCO","391-9234","www.segundomuelle.com","REST. SEGUNDO MUELLE"],[["Internacional"],"INTERNACIONAL \/ MEDITERRANEO","Plaza Obarrio, Ave. Samuel Lewis","2094820","www.lulabydarna.com","Lula By Darna"],[["Internacional"],"Internacional","Avenida Central & Calle 8 Plaza Herrera Casco Antiguo","838-7621","http:\/\/www.americantradehotel.com\/","American Trade Hotel"],[["Internacional"],"Internacional","CL51 ESTE, BELLA VISTA","2655800","www.lapapa.net","RESTAURANTE LA PAPA"],[["Internacional"],"Internacional","COSTA DEL ESTE, TOWN CENTER","2655800","www.lapapa.net","RESTAURANTE LA PAPA COSTA DEL ESTE"],[["Italiana"],"ITALIANA","AV. A, Plaza Herrera - Casco Antiguo - Panam\u00e1","","","Madre Cucina Italiana"],[["Italiana"],"ITALIANA","CL. 57 y Ave. 1\u00aa Su, URB. OBARRIO","223-4676 \/ 7734","www.vinotecapanama.com","VINOTECA CUCINA DI CINIGLIO"],[["Italiana"],"ITALIANA","Calle 9 Oeste, Casco Antiguo","6667-1661","www.pastissimapty.com","Pastissima"],[["Italiana"],"ITALIANA","Causeway de Amador","314-1134","","ALBERTO'S"],[["Italiana"],"ITALIANA","V\u00cdA VENETO, PLAZA DOWNTOWN, EL CANGREJO","387-4455","www.pomodoropanama.com","POMODORO RISTORANTE ITALIANO"],[["Italiana"],"TAPAS E ITALIANA","EL CANGREJO, VIA VENETO, PLAZA DOWNTOWN","387-4456","WWW.ELWINEBAR.COM","WINE BAR SAN FRANCISCO"],[["Latina"],"Contempor\u00e1nea, Sudamericana, Centroamericana","Casa Perez Aleman. Avenida A entre calle 7 y 8, Ciudad de Panam\u00e1","","https:\/\/www.atozexperience.com\/","A to Z Chef's Table"],[["Latina"],"Cubana, Colombiana, Centroamericana","Amador, Isla Flamenco","314-0880","www.bucanerospanama.com","Bucaneros"],[["Latina"],"Latina, Centroamericana","Corner of Central Avenue and Calle 11","262-1682","https:\/\/www.dondejose.com\/","Donde Jos\u00e9"],[["Latina\r\n"],"Caribe\u00f1a, Latina, Saludable","Bocas del Toro, Isla Col\u00f3n, Pueblo de Bocas, Isla Col\u00f3n 507, Panam\u00e1","6776-8858","","Caf\u00e9 del Mar"],[["Latina\r\nPescados y mariscos"],"Caribe\u00f1a, Mariscos, Centroamericana","Calle 6A, Pueblo de Bocas, Isla Col\u00f3n, Panam\u00e1","6726-9851","www.ultimorefugio.com","El \u00faltimo refugio"],[["Mediterr\u00e1nea"],"MEDITERRANEA","SAN FRANCISCO,AVE. 5 SUR, CL. JOSE MATILDE PEREZ","399-9186","https:\/\/www.azafranpanama.com\/","REST. AZAFRAN"],[["Otros"],"\"playground gastronomico\"","Calle 68 Este.","382-1595","play@lamesapanama.com","La Mesa"],[["Otros"],"CASERA","San Francisco, Cl. 69, Plaza SF69","225-6157      o     225-6158","www.fourbistro.com","4BISTR\u00d3 CAF\u00c9"],[["Otros"],"Cocina Urbana","Calle 69, casa 115. San Francisco. Ciudad de Panam\u00e1","203-4574","www.5incopanama.com","5inco"],[["Otros"],"Conciertos y espectaculos","Avenida Central & Calle 8 Plaza Herrera Casco Antiguo","211,2","","Danilo Jazz Club"],[["Otros"],"Griega","Marbella,Calle 49 y Calle Uruguay 1 1","214-9999","www.athenspizzapanama.com","Panos Kretan House"],[["Otros"],"Libanesa, Mediterr\u00e1nea, Del Medio Oriente","Amador Causeway","214-3815","","Beirut"],[["Otros"],"SUIZA","Plaza Downtown, El Cangrejo","","WWW.RESTAURANTES1985.COM","CHALET SUIZO"],[["Otros"],"Snacks internacionales","Las Cabanas Calle Carretera | Inside Barco Hundido, Isla Col\u00f3n 77345, Panam\u00e1","6347-5279","","Bocas Brewery"],[["Otros"],"Tentempi\u00e9s, Saludable, Delicatessen","Avenida A y Calle 6 | Casa Testa Building","212-3487","www.supergourmetcascoviejo.com","Super Gourmet"],[["Paname\u00f1a"],"AFRO PANAME\u00d1A Y PANAME\u00d1A","SAN FRANCISCO,CALLE 68, PLAZA TERRAZAS 68, PLANTA BAJA","203-3539","WWW.LATAPADELCOCO.COM","LA TAPA DEL COCO"],[["Paname\u00f1a"],"TIPICA PANAME\u00d1A ","SAN FRANCISCO, CL. 71, ENTRANDO POR EL HOTEL RAMADA PLAZA","381-0981","www.eltrapicherestaurante.com","EL TRAPICHE"],[["Paname\u00f1a"],"TIPICAS PANAME\u00d1AS","SAN FELIPE AVE. CENTRAL, CASA #7-CASCO ANTIGUO","228-9495","","REST. DIABLICOS"],[["Paname\u00f1a"],"TRADICIONAL","Coronado, Hotel Blue Bay Coronado & Beach Resort","240-4444","https:\/\/www.coronadoluxurysuites.com\/","CLUB DE PLAYA"],[["Paname\u00f1a"],"TRADICIONAL","Coronado, Hotel Blue Bay Coronado & Beach Resort","240-4444","https:\/\/www.coronadoluxurysuites.com\/","LA CARRETA"],[["Paname\u00f1a"],"TRADICIONAL","Coronado, Hotel Blue Bay Coronado & Beach Resort","240-4444","https:\/\/www.coronadoluxurysuites.com\/","LA TERRAZA"],[["Paname\u00f1a\r\nDe autor"],"Paname\u00f1a de autor","10 East Street, Casa Casco Building, 1st level Casa Casco Building , in front of Plaza Herrera","6252-5661","http:\/\/casacasco.com\/","Mano de Tigre"],[["Pasteler\u00eda\/ Postres"],"Cafeteria & Pasteler\u00eda","Mall Multiplaza","302-7656","","Rosselot"],[["Pasteler\u00eda\/ Postres\/Cafeter\u00eda"],"Postres ","Volcancito Road, Boquete","720-3394","","Fresas Mary"],[["Pasteler\u00eda\/ Postres\/Cafeter\u00eda"],"Postres, caf\u00e9","V\u00eda Boquete, Alto Boquete","","","Pasteleria Alemana"],[["Pescados y mariscos"],"Mariscos","Amador, Isla Flamenco","387-0947","","Sirena"],[["Pescados y mariscos"],"Mariscos","Isla Flamenco, Amador Panama","314-0881","www.bucanerospanama.com","Restaurante Bucaneros"],[["Pescados y marsicos"],"Mariscos","Amador Causeway","","","El Muelle"],[["otros\r\nBar\/Pub\/Cervecer\u00eda"],"Alemana, europea, bar","Via Cincuentenario, Casa 50, ","270-2784","","Steinbok"],[["Bar\/Pub\/Cervecer\u00eda","Fusi\u00f3n"],"Bar, Pub, Fusi\u00f3n","Bell Vista, Cl. 54, Marbella","203-8894","","WALL STREET KITCHEN & LOUNGE"],[["Bar\/Pub\/Cervecer\u00eda","Latina"],"Bar, latina, pub","Calle 11 & Avenida B, Casco Antiguo | Hotel Las Clementinas","262-1003","","Casa Bruja"],[["Carnes\/Parrillada","Latina"],"Churrasquer\u00eda, Latina, Parrillada","Amador Causeway","314-1650","","Le\u00f1os y Carb\u00f3n"],[["Espa\u00f1ola","Internacional"],"ESPA\u00d1OLA E INTERNACIONAL","Via Argentina # 6868 Diagonal al parque Andr\u00e9s Bello","263-6868","http:\/\/www.restauranteangel.com.pa","RESTAURANTE \u00c1NGEL"],[["Internacional","Bar\/Pub\/Cervecer\u00eda"],"Internacional, Bar, Pub","Avenida Central | Av. S\u00e9ptima Central, 11-18 Primer Piso, Ciudad de Panam\u00e1 0803","6263-6106","www.casajaguarpanama.com","Casa Jaguar"],[["Internacional","Bar\/Pub\/Cervecer\u00eda"],"Internacional\/ Caf\u00e9","Punta Pacifica, Grand Plaza","3022989","www.darna.com.pa","Darna's Bread Co"],[["Internacional","Latina"],"Internacional, Latina, Mediterr\u00e1nea","Casco Antiguo, Av. S\u00e9ptima Central, entre Casa Jaguar y Teatro Amador | Cerca De Plaza Santa Ana","2122920","www.laseptimacentral.com","La Septima Central"],[["Internacional","Latina"],"Latina, Centroamericana, Internacional","Final de la Calle 50 | 4to Local a Mano Izquierda, Ciudad de Panam\u00e1 0816","391-4657","www.maitopanama.com","Maito"],[["Internacional","Pasteler\u00eda\/Postres\/Cafeter\u00eda"],"COMIDA Y PASTELER\u00cdA INTERNACIONAL","V\u00eda Israel y Cl. 77 San Francisco, Hotel Sheraton Grand Panam\u00e1","305-5100","www.sheratongrandpanama.com","LAS HADAS PASTELERIA Y BISTR\u00d3"],[["Italiana","Internacional"],"ITALIANA E INTERNACIONAL","OBARRIO CL. 57","263-8800","www.napoliobarrio.com","NAPOLI"],[["Italiana","Internacional"],"ITALIANA E INTERNACIONAL","VIA PORRAS CL. 69 SAN FRANCISCO","226-6980","www.restauranteypizzeriasorrento.com","SORRENTO"],[["Latina","Bar\/Pub\/Cervecer\u00eda"],"Caribe\u00f1a, Latina, Bar","Avenida A | Entre Plaza Herrera y Calle 8A,","391-5596","","Pedro Mandinga"],[["Latina","Bar\/Pub\/Cervecer\u00eda"],"Mexicana, Latina, Bar","Calle 12 Este | Rooftop Selina Casco Viejo, Ciudad de Panam\u00e1 0803, Panam\u00e1","387-5279","www.tacoslaneta.com","Tacos La Neta"],[["Latina","Espa\u00f1ola"],"Caribe\u00f1a, Latina, Espa\u00f1ola, Sudamericana, Centroamericana","Casco Antiguo, Calle Jose de la Obald\u00eda, entre calle 8va y 9na, Ciudad de Panam\u00e1 0801, Panam\u00e1","2094185","","Nueve"],[["Latina","Internacional"],"Latina, Internacional, Centroamericana","Ave. Central, Between 2nd and 3rd st East | Casco Antiguo","395-1749","","Tio Navaja"],[["Latina","Otros"],"Caribe\u00f1a, Latina, Contempor\u00e1nea","Calle 6ta, casco viejo | San Felipe,","385-6860","","La Sexta"],[["Latina","Pescados y mariscos"],"Caribe\u00f1a, Latina, Mariscos","Amador Causeway, Isla Naos","228-4909","www.restaurantemiranchito.com","Mi Ranchito"],[["Latina","Pescados y mariscos"],"Caribe\u00f1a, Latina, Mariscos","Calle 3ra | Calle Principal on the water, Isla Col\u00f3n, Panam\u00e1","757-9035","www.buenavistabocas.com","Buena Vista"],[["Latina","Pescados y mariscos"],"Caribe\u00f1a, Mariscos, Latina","Cinta Costera III, Ciudad de Panam\u00e1 0000, Panam\u00e1","6137-6593","","Sabores del Chorrillo"],[["Latina","Pescados y mariscos"],"Sudamericana, Centroamericana, Mariscos","Amador Causeway","211-3671","www.pencas.com","Pencas"],[["Latina","Vegana. Vegetariana. Sin Gluten"],"Centroamericana, Apto para vegetarianos","Calle 12 Este | Casco Antiguo, Ciudad de Panam\u00e1","202-6892","","Fonda Lo Que Hay"],[["Otros","Internacional"]," ESCOCESA, BRIT\u00c1NICA O INTERNACIONAL","OBARRIO, AVE. SAMUEL LEWIS Cl. 74, EDIF. EDEN ROC, PB","385-5383","www.thewallacepanama.com","THE WALLACE"],[["Paname\u00f1a","Fusi\u00f3n"],"Paname\u00f1a fusion","Plaza, Av Central y Calle 12, Panam\u00e1","262-3925","https:\/\/www.elviejosantana.com\/","El Viejo Santana"],[["Paname\u00f1a","Internacional"],"TIPICA PANAME\u00d1A E INTERNACIONAL","BELLA VISTA CL. 51, N\u00ba22","269-3840","www.tinajaspanama.com","LAS TINAJAS"],[["Pescados y mariscos","Carnes\/Parrillada\r\nOtros"],"MARISCOS FRESCOS, CARNES AL CARB\u00d3N, DELICIAS GRIEGAS","VIA CINCUENTENARIO, DIAGONAL AL CENTRO DE CONVENCIONES ATLAPA","226-1096       \/     226-1870 ","www.parrilladajimmy.com","PARRILLADA JIMMY"],[["Vegetariana. Sin Gluten","Latina"],"Centroamericana, Opciones veganas, Opciones sin gluten","Calle 72 Este, s\/n | Detr\u00e1s de la pasteler\u00eda Delicatesse Postres, San Francisco, Ciudad de Panam\u00e1 0801","388-1365","www.intimorestaurante.com","Intimo"],[["Vegetariana. Sin Gluten","Latina"],"Latina, Centroamericana, Apto para vegetarianos","Calle 51 casa #22 | Bellavista, Ciudad de Panam\u00e1, Panam\u00e1","263-7890","","Restaurante las Tinajas"],[["Bar\/Pub\/Cervecer\u00eda","Americana","Latina"],"Bar, Estadounidense, Centroamericana","Amador Causeway","314-0168","www.balboayachtclubpanama.com\/","Balboa Yatch Club"],[["Fusi\u00f3n","Asi\u00e1tica","Latina"],"Fusion, Peruana, Asi\u00e1tica","Avenida Central Calle A &, Calle B, ","300-1125","www.laconcordiapanama.com","Lola Mia"],[["Internacional","Bar\/Pub\/Cervecer\u00eda","Latina"],"Internacional, Bar, Centroamericana","Avenida Central y Calle B | Casco Viejo","282-0064","","The Stranges Club"],[["Italiana","Internacional","Pescados y mariscos"],"Italia,mariscos, internacional","Calle 9 cruce con Jos\u00e9 de la Obald\u00eda. Frente a la Plaza Herrera. Casco Antig\u00fco,","3852692","","La Fisheria"],[["Latina","Pescados y mariscos","Internacional"],"Latina, Mariscos, Internacional","Calle 3 | Avenida A, Casco Antiguo","228-3341","","Mostaza"],[["Latina","Pescados y mariscos","Internacional"],"Peruana, Mariscos, Internacional","Calle 12 Oeste 755 | Casco Viejo,","300-1125","www.laconcordiapanama.com","Numen Gastro Lounge"],[["Otros","Mediterr\u00e1nea","Vegetariana. Sin Gluten"],"Mediterr\u00e1nea, Opciones veganas, Opciones sin gluten","Av A Casco Viejo, Ciudad de Panam\u00e1 0802,","211-1956","www.laboratoriomadrigal.com","Laboratorio Madrigal"],[["Pescados y mariscos","Espa\u00f1ola","Carnes\/Parrillada"],"Mariscos, Espa\u00f1ola, Parrilla","Av. Eloy Alfaro, Panam\u00e1","303-0991","www.restaurantesantaritapanama.com","Santa Rita"],[["Pescados y mariscos","Latina","Internacional"],"Mariscos, Centroamericana, Internacional","Calle principal de San Felipe, Local 1 | Casco Antiguo,","6251-2120","","Capital Bistro"]]};

// Declarar map del store a los props del componente
const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const RestaurantPage = props => {


	function _order(order) {

    console.log(order);
  } 
	/*
  const onChangeOrder = (e) => {

 	setSelOrder(e.currentTarget.value);
 	get();
  };
  */

  // const [restaurants, setRestaurants] = useState({es: [], en: []});
  const [restaurants, setRestaurants] = useState([]);
  const [typesFoods, setTypes] = useState([]);
  const [selOrder, setSelOrder] = useState(0);
  const [selTypes, setSelTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listOrders, getListOrders] = useState([
        {value: "0", label: "A - Z"},
        {value: "1", label: "Z - A"},
      ]);

  const getFilterData = () => {
    fetch(`${URL_BASE}?get=onlyfilters`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setTypes(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setTypes(tof.data);
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  const get = () => {
    fetch(`${URL_BASE}?get=restaurants`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setRestaurants(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setRestaurants(ress.data);
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  const getFilteredResults = (e, body) => {
    fetch(`${URL_BASE}/hotel/filtered`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setRestaurants(result);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setError(null);
        setError(result.error);
      });
  };

  useEffect(() => {
    getFilterData();
    get();
  }, []);

  const idioma = props.idiomasReducer.currentLanguage;
  const data = pageData[idioma];
  const mainText = data.mainText[0];
  let markers = [];
  let map = null;
  let HotelFiltered = null;

  // console.log(filterMin);
  // console.log(filterMax);
  // console.log(hotels[idioma]);

  if (loading || !data || !restaurants) {
    return <div className="loader-container">
      <div className="animated yt-loader"></div>
      <div className="loader-container-relative">
        <div className="loader"></div>
        <h6>{idioma === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
      </div>
    </div>
  }



  /*
  if (hotels && hotels[idioma] && hotels[idioma].length > 0) {
    hotels[idioma].map(i => {
      i.map.map(m => markers.push(m));
    });
    map = markers.length ? <Map coords={markers}/> : null;
  }
  */

  /*
  if (filterMax != 0) {
    HotelFiltered = (
      <HotelFilter
        cities={cities}
        min={filterMin}
        max={filterMax}
        filterResults={getFilteredResults}
      />
    )
  }
  */

  return (
    <div className="full-page restaurant-page">
      <div className="App">
        <div className="primary-content">

          <Hero heroData={data.bannerImg}/>

          <div className="container restaurant-block">
            <div className="filter">
              <h4>Filtrar</h4>

              <div className="content-filters">
              <RadioButton items={listOrders} name="opt-group-prices" value="-1"
                         className="radio-group"
                         onUpdate={this.onChangePrices}/>
                <span>Por orden alfabético</span>
                <ul>
                  <li><input type="radio" name="order" value="0" onClick={_order(1)} /> A - Z</li>
                  <li><input type="radio" name="order" value="1" onClick={_order(2)} /> Z - A</li>
                </ul>

                <span>Por tipo de comida</span>
                <ul>
                  {
                    typesFoods.map((item, i) => (
                      <li key={i}>
                        <input type="checkbox" name="filter" value="{item}" /> {item}
                      </li>
                    ))
                  }
                  <li><input type="checkbox" name="filter" value="Americana" /> Americana</li>
                  <li><input type="checkbox" name="filter" value="Asiática" /> Asiática</li>
                  <li><input type="checkbox" name="filter" value="Bar/Pub/Cervecería" /> Bar/Pub/Cervecería</li>
                </ul>
              </div>
            </div>

            <div className="restaurant-list">
              {
                restaurants.map((item, i) => (
                  <div key={i} className="restaurant-card">
                    <h3>{item[5]}</h3>
                    <h6>{item[1]}</h6>
                    <ul>
                      <li><strong>Dirección:</strong> {item[2]}</li>
                      <li><strong>Teléfono:</strong> {item[3]}</li>
                      <li><strong>Sitio web:</strong> <a href="{item[4]}">{item[4]}</a></li>
                    </ul>
                  </div>
                ))
              }

              <div className="clear"></div>              
            </div>
            
            <div className="clear"></div>              
          </div>

          <div className="container">
            <div className="d-flex flex-center">
              <GoBackButton>
                {idioma === "es" ? "< VOLVER" : "< GO BACK"}
              </GoBackButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default compose(withLocalize, connect(mapStateToProps, null))(RestaurantPage);



      <form onSubmit={this.handleSubmit}>
        <p className="title">Select a pizza size:</p>
        
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="0"
                checked={this.state.order === "0"}
                onChange={this.handleChange}
              />
              A - Z
            </label>
          </li>
          
          <li>
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.order === "1"}
                onChange={this.handleChange}
              />
              Z - A
            </label>
          </li>

        </ul>

        <button type="submit" className="submit-button">Make your choice</button>
      </form>
