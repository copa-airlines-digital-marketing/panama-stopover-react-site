import React from 'react';
import {withLocalize} from 'react-localize-redux';
import {Player, ControlBar} from 'video-react';

import {Modal} from 'antd';

class ModalVideo extends React.Component {
  state = {visible: false};

  constructor(props) {
    super(props);


    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.load = this.load.bind(this);
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeSource(video) {
    return () => {
      this.setState({
        source: video
      });
      this.player.load();
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
    
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const video_link = this.props.video_link;

    this.changeSource(video_link);
    return (
      <div>
        <div className="video-itinerario-box-play"
             onClick={this.showModal}>Play 
        </div>
        <div>
        
        </div>
        <Modal
          title={false}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={false}
        >
          <Player ref={(player) => {
                          this.player = player
                        }}
                                src={video_link}
                                muted
                                loop autoPlay >
                          <ControlBar autoHide={false} disableDefaultControls={false}>
                          </ControlBar>
                        </Player>
        </Modal>
      </div>
    );
  }
}

export default withLocalize(ModalVideo);