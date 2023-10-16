import bookingPanel from '../../../../data/BookingPanel';

export const initialProps = ({ bookingParams = {} }) => ({
  roundtrip: bookingParams.roundtrip || false,
  adults: bookingParams.adults || 1,
  children: bookingParams.children || 0,
  infants: bookingParams.infants || 0,
  date1: bookingParams.date1 || null,
  date2: bookingParams.date2 || null,
  promocode: bookingParams.promocode || "",
  area1: bookingParams.area1 || "",
  area2: bookingParams.area2 || "",
  advanced_air_search: false,
  flexible_dates_v2: bookingParams.flexible_dates_v2 || false,
})

export const fieldsValidation = (values, { idiomasReducer, typeIndex }) => {
  const errors = {}

  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];

  if (!values.area1) {
    errors.area1 = translations.emptyOrigin;
  }

  if (!values.area2) {
    errors.area2 = translations.emptyDestination;
  }

  if (!values.date1) {
    errors.date1 = translations.emptyDate;
  }

  if (!values.stopoverDate) {
    errors.stopoverDate = translations.emptyStopoverDate;
  }

  if (typeIndex === 0 && !values.date2) {
    errors.date2 = translations.emptyDate;
  }

  return errors
}
