const idiomasReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.language
      };
    default:
      return state
  }
};

let currentLanguage;
if(localStorage.getItem("persist:root") === null && window.location.hostname.match('stopoverinpanama')) {
  currentLanguage = 'en';
} else {
  currentLanguage = 'es';
}

const initialState = {
  currentLanguage: currentLanguage,
  languages: [
    'es',
    'en'
  ]
};

export default idiomasReducer;
