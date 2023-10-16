import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";

import "./index.scss";

class PackagesFilterWelcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataMappingInfo = this.props.dataContent;

    return (
      <div className="container">
        <div className="main-area">
          <h1>{dataMappingInfo.title}</h1>
          <p>{dataMappingInfo.subtitle}</p>
          <p
            dangerouslySetInnerHTML={{ __html: dataMappingInfo.bioDisclaimer }}
          ></p>
        </div>
      </div>
    );
  }
}

export default withLocalize(PackagesFilterWelcome);
