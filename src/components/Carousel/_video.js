import React, {Component} from 'react';
import {Player} from 'video-react';

export default class PlayerVideo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: props.dataVideo,
    };

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  render() {
    return (
      <Player ref={
        player => {
          this.player = player;
        }
      } autoPlay={true} loop={true} muted={false} controls={false}
      >
        <source
          src={
            this.state.playerSource
          }
        />
      </Player>
    );
  }
}
