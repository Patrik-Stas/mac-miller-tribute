import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import { Grid } from 'semantic-ui-react';
import Router from 'next/dist/lib/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faPauseCircle,
  faStepForward,
  faStepBackward,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons';

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
      onPrevButtonClick,
      onPlayButtonClick,
      onNextButtonClick,
      onStopButtonClick,
      isPlayingNow,
    } = this.props;
    return (
      <Grid className="playsection" style={{"marginTop":0}}>
        <Grid.Row style={{marginLeft: '3em', marginRight: '3em', marginTop:'1em' }}>
          <Grid.Column width={6}>
            <h2 className="actionable" onClick={this.jumpToSong.bind(this)}>{playingSong}</h2>
            <h4>{playingAlbum}</h4>
          </Grid.Column>
          <Grid.Column width={3}>
            <span title="regular tooltip">
            <FontAwesomeIcon className="actionable" style={{ marginRight: 10 }} onClick={onPrevButtonClick} icon={faStepBackward} size='3x'/>
            </span>
            {(isPlayingNow) ? (
              <FontAwesomeIcon className="actionable"  style={{ marginRight: 10 }} onClick={onStopButtonClick} icon={faStopCircle} size='3x'/>
            ) : (
              <FontAwesomeIcon className="actionable"  style={{ marginRight: 10 }} onClick={onPlayButtonClick} icon={faPlayCircle} size='3x'/>
            )
            }
            <FontAwesomeIcon className="actionable"  style={{ marginRight: 10 }} onClick={onNextButtonClick} icon={faStepForward} size='3x'/>
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
