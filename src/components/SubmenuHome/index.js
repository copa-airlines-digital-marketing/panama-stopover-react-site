import React from 'react';
import {withLocalize} from 'react-localize-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const SubmenuHome = (props) => {
  const {currentLanguage} = props.idiomasReducer;
  let homeData = props.fullHomeData[currentLanguage];

  return (
    <div className="submenu-list-box">
      <ul className="row">
        {
          homeData.submenu_home.map((item, i) => {
            return (
              <li className="col-md-4 submenu-list-box-item" key={i}>
                <AnchorLink
                  id={`key-${i}`}
                  href={`${item.href}`}
                  className="col-md-12 submenu-list-box-item-a"
                >
                  <span>{item.title}</span>
                </AnchorLink>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};


export default compose(withLocalize, connect(mapStateToProps, null))(SubmenuHome);