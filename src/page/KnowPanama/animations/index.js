import posed from 'react-pose';

export const KnowPanamaListAnimation = posed.div({
  init: {
    marginTop: '0px !important',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: '100%'
  },
  zoom: {
    marginLeft: '75px',
    marginRight: '75px',
    marginTop: '75px',
    paddingLeft: '75px',
    paddingRight: '75px',
    paddingTop: '75px',
    height: 'auto'
  }
});