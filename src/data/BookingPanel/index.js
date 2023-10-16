export default {
  es: {
    rountripSearchLabel: 'Ida y vuelta',
    oneWaySearchLabel: 'Solo ida',
    originTitle: 'Desde',
    originPlaceholder: 'Ingresa el origen',
    originFocusPlaceholder: 'Ciudad, país o aeropuerto',
    destinationTitle: 'Hacia',
    destinationPlaceholder: 'Ingresa el destino',
    destinationFocusPlaceholder: 'Ciudad, país o aeropuerto',
    stopoverTitle: '¿Cuando deseas hacer tu parada en Panamá?',
    stopoverDeparture: ({ originCode }) => `En mi ida ${ originCode ? `(${originCode} - PTY)` : ''}`,
    stopoverReturn: ({ destinationCode }) => `En mi regreso ${ destinationCode ? `(PTY - ${destinationCode})` : '' }`,
    stopoverDateTitle: '¿Cuántas noches deseas quedarte en Panamá?',
    stopoverDatePlaceholder: 'Seleccionar noches',
    stopoverDateOptionText: 'noche',
    noResultsAutocomplete: "Ups, no se encontraron resultados",
    noResultsAutocompleteHelperText: "Por favor modifica tu busqueda",
    noResultsHelperTextOrigin: "Selecciona un origen válido",
    noResultsHelperTextDestination: "Selecciona un destino válido",
    emptyOrigin: "Selecciona un origen",
    emptyDestination: "Selecciona un destino",
    emptyDate: "Selecciona fecha de viaje",
    emptyOriginWhenDestination: "Debes seleccionar un origen primero",
    emptyStopoverDate: 'Selecciona una fecha de stopover',
    submitButton: "Buscar Vuelos",
    airportListFail: "Ups, no pudimos cargar los aeropuertos.",
    retryButton: "Intenta nuevamente.",
    bookingPassenger: {
      label: "Pasajeros",
      adults: "Adultos",
      adult: "Adulto",
      adultAge: "Mayores de 12 años",
      children: "Niños",
      child: "Niño",
      childMd: "Niñ.",
      childAge: "2-11 años",
      infants: "Infantes",
      infant: "Infante",
      infantMd: "Inf.",
      infantsAge: "Menos de 2 años",
      errorAdult: "Debe haber al menos 1 adulto por reserva",
      errorChild: "Por seguridad, no puedes añadir más infantes que adultos",
      errorInfant:
        "No puedes añadir más de 8 pasajeros en reservas online, comunícate con nuestro Centro de Llamadas.",
      save: "Guardar",
    },
    datePicker: {
      dateRoundTrip: "Fechas de viaje",
      dateRoundTripPlaceHolder: "Ingresa fechas de vuelo",
      dateOneWay: "Fecha de Viaje",
      dateOneWayPlaceholder: "Ingresa fecha de vuelo",
      flexibleDates: "Fechas flexibles",
      confirmCTA: "Confirmar",
      departure: "Salida",
      return: "Regreso",
    },
    keyboardShortcuts: {
      title:
        "Panel informativo donde podrás conocer más sobre la navegación mediante teclado para la selección de fechas. Continua para conocer los atajos de teclado.",
      enter: "Confirma la fecha seleccionada (Enter)",
      leftAndRight:
        "Cambiar día hacia atrás (flecha izquierda) o hacia adelante (flecha derecha)",
      upAndDown:
        "Semana anterior (flecha arriba) o siguiente semana (flecha abajo)",
      pageUpAndPageDn:
        "Mes anterior (tecla retroceder página) o al siguiente mes (tecla avanzar página)",
      homeAndEnd:
        "Primer día (tecla Inicio) o último día (tecla Fin) de la semana",
      escape: "Regresar campo de entrada de fecha (tecla Escape)",
      info: "Abrir panel de información de Navegación de teclado",
      botoni: "Abrir panel de información de Navegación de teclado (tecla i)",
      closeBtn:
        "Botón de Cierre. Presiona Enter para cerrar este modal y regresar a selección de fecha",
    },
    accesibility: {
      originField:
      "Origen. Introduce Ciudad, país o aeropuerto de origen de tu viaje.",
      destinationField:
      "Destino. Introduce Ciudad, país o aeropuerto de origen de tu viaje.",
      swapButton:
      ({ origin, destination }) => `Origen ${origin}, Destino ${destination} Presiona Enter para intercambiar, o continúa para seleccionar fechas de viaje.`,
      searchButton:
      "Buscar Vuelos. Presiona enter para iniciar la búsqueda de vuelos con tus parámeros ingresados.",
      airportLoadingFail:
      "Error de carga. No pudimos cargar los aeropuertos. Presiona Tab para intentar nuevamente la carga y continuar con tu búsqueda.",
      airportLoadingFailButton:
      "Presiona Enter para intentar nuevamente la carga y continuar con tu búsqueda.",
      bookingPassenger: {
        field:
          "Sección de Pasajeros. Selecciona la cantidad de adultos, niños e infantes que viajarán. ",
        sectionAdult: "Sección para seleccionar Adultos. Mayores de 12 años.",
        sectionChild: "Sección para seleccionar Niños. Menores de 12 años.",
        sectionInfant: "Sección para seleccionar Infantes. Menores de 2 años.",
        incrementBtn: ({type, num, name}) => `Incrementar ${type}. Actualmente hay ${num} ${name}.`,
        decrementBtn:
          ({type, num, name}) => `Disminuir cantidad de ${type}. Actualmente hay ${num} ${name}.`,
        labelAmount: ({num, name}) => `${num} ${name} seleccionado`,
        saveBtn:
          ({numAdl, textAdl, numChil, textChil, numInf, textInf}) => `Guardar selección de pasajeros. ${numAdl} ${textAdl}, ${numChil} ${textChil} y ${numInf} ${textInf} seleccionado, presiona enter para aceptar esta seleccción y continuar.`,
      },
      datePicker: {
        dateRoundTrip:
          "Selección de Fechas. A continuación podrás seleccionar la fecha de tu vuelo. Podrás navegar por mes y días para realizar tu selección.",
        dateOneWayTrip:
          "Búsqueda de vuelos de solo ida, presiona enter para avanzar a selección de Origen.",
        travelDateField:
          "Selección de Fechas. A continuación podrás seleccionar la fecha de tu vuelo. Podrás navegar por mes y días para realizar tu selección.",
        monthSelection:
          (month, year) => `${month} ${year}. Presiona enter para ir a días de ${month}`,
        daySelection:
          (weekday, day) => `${weekday} ${day}. Toca dos veces para seleccionar este día.`,
        roundTripSelection:
          (weekday, day, month) => `Has seleccionado ${month}, ${weekday} ${day} para vuelo de ida, seleccione la fecha de regreso`,
        oneWaySelection: (weekday, day, month) => `Has seleccionado ${month}, ${weekday} ${day}`,
        flexibleDatesSelection:
          (active) => `Fechas flexibles. Presiona enter para activar búsqueda con resultado de fechas flexibles. ${active}`,
        roundTripConfirmationCTA:
          (departureMonth, departureDay, returnMonth, returnDay) => `Confirmar fechas de búsqueda. Presiona enter para confirmar que tus fechas de búsqueda de viaje son: salida ${departureMonth} ${departureDay}; Regreso ${returnMonth} ${returnDay}`,
        oneWayConfirmationCTA:
          (departureMonth, departureDay) => `Confirmar fecha de búsqueda. Presiona enter para confirmar que tu fecha de búsqueda de viaje es ${departureMonth} ${departureDay}`,
      },
    },
  },
  en: {
    rountripSearchLabel: 'Round Trip',
    oneWaySearchLabel: 'One way',
    originTitle: 'From',
    originPlaceholder: 'Enter origin',
    originFocusPlaceholder: 'City, country or airport',
    destinationTitle: 'To',
    destinationPlaceholder: 'Enter destination',
    destinationFocusPlaceholder: 'City, country or airport',
    stopoverTitle: 'When do you want to make your stop in Panama?',
    stopoverDeparture: ({ originCode }) => `On departure ${ originCode ? `(${originCode} - PTY)` : ''}`,
    stopoverReturn: ({ destinationCode }) => `On return ${ destinationCode ? `(PTY - ${destinationCode})` : '' }`,
    stopoverDateTitle: 'How many nights do you want to stay in Panama?',
    stopoverDatePlaceholder: 'Select nights',
    stopoverDateOptionText: 'night',
    noResultsAutocomplete: "Oops, no results found",
    noResultsAutocompleteHelperText: "Please modify your search",
    noResultsHelperTextOrigin: "Select a valid origin",
    noResultsHelperTextDestination: "Select a valid destination",
    emptyOrigin: "Select an origin",
    emptyDestination: "Select a destination",
    emptyDate: "Select travel date",
    emptyOriginWhenDestination: "You must select an origin first",
    emptyStopoverDate: 'Select a stopover travel date',
    submitButton: "Find flights",
    airportListFail: "Oops, we couldn't load the airports.",
    retryButton: "Retry",
    bookingPassenger: {
      label: "Travelers",
      adults: "Adults",
      adult: "Adult",
      adultAge: "+ 12 years",
      children: "Children",
      child: "Child",
      childMd: "Chi.",
      childAge: "Under 12 years old",
      infants: "Lap Infants",
      infant: "Lap Infant",
      infantMd: "Inf.",
      infantsAge: "Under 2 years old",
      errorAdult: "There must be at least 1 adult per booking.",
      errorChild: "For safety reasons, you can't add more infants than adults.",
      errorInfant:
        "You can't add more than 8 passengers in online bookings, contact our Call Center.",
      save: "Save",
    },
    datePicker: {
      dateRoundTrip: "Travel dates",
      dateRoundTripPlaceHolder: "Enter travel dates",
      dateOneWay: "Travel date",
      dateOneWayPlaceholder: "Enter travel date",
      flexibleDates: "Flexible dates",
      confirmCTA: "Confirm",
      departure: "Departure",
      return: "Return",
    },
    keyboardShortcuts: {
      title:
        "Information panel where you can learn more about keyboard navigation for selecting dates. Continue to learn keyboard shortcuts.",
      enter: "Confirm the selected date (Enter)",
      leftAndRight: "Change day backward (left arrow) or forward (right arrow)",
      upAndDown: "Previous week (up arrow) or next week (down arrow)",
      pageUpAndPageDn:
        "Previous month (Page up key) or to the next month (Page down key)",
      homeAndEnd: "Week's first day (Home key) or last day (End key)",
      escape: "Return date entry field (Escape key)",
      info: "Open Keyboard Navigation information panel",
      botoni: "Open Keyboard Navigation information panel (i key)",
      closeBtn:
        "Close button. Press Enter to close this informational panel and return to date selection",
    },
    accesibility: {
      originField:
      "Origin. Enter the city, country or airport of origin of your trip.",
      destinationField:
      "Destination. Enter your destination city, country or airport.",
      swapButton:
      ({ origin, destination }) => `Swap button. Origin ${origin}, Destination ${destination} Press Enter to swap, or continue to select travel dates.`,
      searchButton:
      "Search Flights. Press enter to start the flight search with your parameters entered.",
      airportLoadingFail:
      "Load error. We couldn't load the airports. Press Tab to retry and continue your search.",
      airportLoadingFailButton:
      "Press Enter to retry and continue your search.",
      bookingPassenger: {
        field:
          "Travels and Class section. Select the number of Adults, Children and infants that will be traveling. Also choose if you want to travel in business or economy.",
        sectionAdult: "Section to select Adults. Over 12 years.",
        sectionChild: "Section to select Children. Under 12 years old.",
        sectionInfant: "Section to select Infants. Under 2 years old.",
        incrementBtn: ({type, num, name}) => `Add ${type}.${num} ${name} currently selected`,
        decrementBtn: ({type, num, name}) => `Subtract ${type}. ${num} ${name} currently selected.`,
        labelAmount: ({num, name}) => `${num} ${name} selected`,
        saveBtn:
        ({numAdl, textAdl, numChil, textChil, numInf, textInf}) => `Save selection of passengers. ${numAdl} ${textAdl}, ${numChil} ${textChil} and ${numInf} ${textInf} selected, press enter to accept this selection and continue.`,
      },
      datePicker: {
        dateRoundTrip:
          "Dates Selection. You can select the date of your flight. You can browse by month and day to make your selection.",
        dateOneWayTrip:
          "Search for one-way flights, press enter to advance to Origin selection.",
        travelDateField:
          "Dates Selection. You can select the date of your flight. You can browse by month and day to make your selection.",
        monthSelection: (month, year) => `${month} ${year}. Press enter to go to ${month} days.`,
        daySelection: (weekday, day) => `${weekday} ${day}. Press enter to select this day.`,
        roundTripSelection:
          (month, weekday, day) => `You have selected ${month}, ${weekday} ${day} for the outbound flight, please select the return date.`,
        oneWaySelection: (month, weekday, day) => `You have selected ${month}, ${weekday} ${day}`,
        flexibleDatesSelection:
          (active) => `Flexible dates. Press enter to activate flexible dates on your search results. ${active}`,
        roundTripConfirmationCTA:
        (departureMonth, departureDay, returnMonth, returnDay) => `Confirm search dates. Press enter to confirm your search travel dates are: Departing ${departureMonth} ${departureDay}, returning ${returnMonth} ${returnDay}`,
        oneWayConfirmationCTA:
        (departureMonth, departureDay) => `Confirm search date. Press enter to confirm your search travel date is: ${departureMonth} ${departureDay}`,
      },
    },
  },
}