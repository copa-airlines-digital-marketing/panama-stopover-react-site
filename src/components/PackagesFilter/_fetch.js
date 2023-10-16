import React, { Component } from 'react';
import { withLocalize } from 'react-localize-redux';

import './index.scss';
import { compose } from "redux";
import { connect } from "react-redux";

// let url_api = 'https://copa-airlines-stopover-backend.st4ging.dev/api';
// let url_api = process.env.REACT_APP_API_URL;
let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class PackagesFilterByTabs extends Component {
  state = {
    isLoading: true,
    packages: [],
    error: null
  };

  fetchpackages() {
    fetch(`${url_api}/package`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          packages: data,
          isLoading: false,
        });
        localStorage.setItem('myDataPackages', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('myDataPackages')));
      }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchpackages();
  }

  render() {
    const { isLoading, packages, error } = this.state;
    const { currentLanguage } = this.props.idiomasReducer;
    const translations = packages[currentLanguage];

    return (
      <div className="packages_list">
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          translations.map((package_i, i) => {
            const { agency, id } = package_i;
            return (
              <div key={i}>
                <p>agency: {agency}</p>
                <p>id Address: {id}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <div className="loader-container-relative">
            <div className="loader"></div>
            <h6>{currentLanguage === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
          </div>
        )}
      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(PackagesFilterByTabs);