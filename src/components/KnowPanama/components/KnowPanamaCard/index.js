import React from "react";

import {withRouter} from "react-router";
import classnames from 'classnames/bind';

import "./styles.scss";
import {isMobile} from "react-device-detect";

// const CONOCE_PANAMA_BASE_URL = 'conoce-panama';

class KnowPanamaCard extends React.Component {
  preview = React.createRef();

  timer = null;
  pressing = false;
  transitioning = false;

  state = {
    hover: false,
    zoom: false,
    force: 0,
    isClicked: false
  };

  resetForce = () => {
    this.setState({force: 0});
    this.transitioning = false;
  };

  showZoom = () => {
    const {welcome, history} = this.props;

    setTimeout(() => {
      history.push(`/${welcome.parent_slug}/${welcome.type}`);
    }, 0);
  };

  onMouseUp = () => {
    clearTimeout(this.timer);
    this.pressing = false;
    // this.timer = setTimeout(this.resetForce, 500);
    this.timer = setTimeout(this.resetForce, 0);
  };

  onClick = () => {
    clearTimeout(this.timer);
    this.transitioning = true;
    this.showZoom();
    // once the user has clicked
    // the entering transition should start
    // therefore before reseting the force
    // we wait for 200ms (arbitrary figure)
    // setTimeout(this.resetForce, 1000);
    setTimeout(this.resetForce, 0);
  };

  hoverOn = () => {
    this.setState({
      hover: true
    });
  };

  hoverOff = () => {
    this.setState({
      hover: false
    });
  };



  render() {
    const {item, welcome, actionButtonText} = this.props;
    const {hover} = this.state;

    return (
      <div
        id={`preview-id-${item.id}`}
        data-id={welcome.id}
        className={classnames({
          "preview-container": true,
          zoomIn: this.transitioning
        })}
        onClick={this.onClick}
        onMouseUp={this.onMouseUp}
        ref={preview => (this.preview = preview)}
      >
        <span
          data-id={item.id}
          className={`preview cover direction-${welcome.id % 2 ? "l" : "r"} ${
            hover ? "hovered" : "not-hovered"
          }`}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
        >
          <img
            className="visibility-hidden"
            src={(!isMobile) ? (item.img) : (item.img_mob)}
            alt={welcome.title}
          />
          {!this.transitioning && (
            <span className="preview-area-active">
              <span className="preview-area-active-all transition-all">
                  <span className="preview-area-active-title">
                    {welcome.title}
                  </span>
                  <span className="preview-area-active-summary"
                        dangerouslySetInnerHTML={{__html: welcome.info_short}}></span>
                  <span className="preview-container-btns">
                    <span className="btn btn-see-more ">{actionButtonText}</span>
                  </span>
              </span>
            </span>
          )}
        </span>

        <div
          className="effect-scale"
          style={{
            backgroundImage: `url(${(!isMobile) ? (item.img) : (item.img_mob)})`
          }}
        >
          <img
            className="visibility-hidden"
            src={(!isMobile) ? (item.img) : (item.img_mob)}
            alt={item.title}
          />
        </div>
      </div>
    );
  }
}

KnowPanamaCard.propTypes = {
  //
};

export default withRouter(KnowPanamaCard);
