import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import { Grid } from 'semantic-ui-react';


class AlbumSection extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    // const { watchId, name, album, year } = this.props;
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
      <Grid id="playsection" style={{height}}>
        <Grid.Row style={{marginTop:"1em"}}>
          <Grid.Column width={8} id="metadata">
            <h1>{playingSong}</h1>
            <h2>{(playingReleaseYear) ? `${playingReleaseYear}: `: ''} {playingAlbum}</h2>
          </Grid.Column>
          <Grid.Column width={8}>
            <YouTube
              videoId={playingWatchId}
              id={playingWatchId}
              className="youtubevideo"
              containerClassName="videocontainerclass"
              opts={{height:height*0.7, width:"100%"}}
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
