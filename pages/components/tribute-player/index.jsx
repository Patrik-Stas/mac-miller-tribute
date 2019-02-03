import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import { Grid } from 'semantic-ui-react';
import Router from 'next/dist/lib/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStepForward, faStepBackward} from '@fortawesome/free-solid-svg-icons'

class AlbumSection extends Component {
  constructor(props) {
    super(props);
  }

  jumpToSong(e) {
    const foo = `/#${this.props.playingWatchId}`;
    console.log(`${foo}`);
    Router.push(foo, foo);
  }

  jumpToAlbum(e) {
    const { router } = this.props;
    Router.push('/', '/', { shallow: true });
  }

  render() {
    const {
      playingWatchId,
      playingAlbum,
      playingSong,
      playingReleaseYear,
      onReady,
      onPlay,
      onPause,
      onEnd,
      onError,
      onStateChange,
      onPlaybackRateChange,
      onPlaybackQualityChange,
      height,
    } = this.props;
    return (
      <Grid className="playsection" style={{ height }}>
        <Grid.Row style={{ marginTop: '1em', marginLeft:'3em' }}>
          <Grid.Column width={6}>
            <h2 onClick={this.jumpToSong.bind(this)}>{playingSong}</h2>
            <h4>{playingAlbum}</h4>
          </Grid.Column>
          <Grid.Column width={3}>
            <FontAwesomeIcon style={{marginRight:10}} icon={faStepBackward} size='2x' />
            <FontAwesomeIcon style={{marginRight:10}} icon={faPlayCircle} size='2x' />
            <FontAwesomeIcon style={{marginRight:10}} icon={faStepForward} size='2x' />
          </Grid.Column>
          <Grid.Column width={7}>
            <YouTube
              videoId={playingWatchId}
              // id={playingWatchId}
              // className="youtubevideo"
              containerClassName="videocontainerclass"
              opts={{ height: height * 0.7, width: '100%' }}
              onReady={onReady}
              onPlay={onPlay}
              onPause={onPause}
              onEnd={onEnd}
              onError={onError}
              onStateChange={onStateChange}
              onPlaybackRateChange={onPlaybackRateChange}
              onPlaybackQualityChange={onPlaybackQualityChange}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AlbumSection;