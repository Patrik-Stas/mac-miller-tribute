import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import { Grid } from 'semantic-ui-react';
import Router from "next/dist/lib/router";



class AlbumSection extends Component {
  constructor(props) {
    super(props);
  }

  jumpToSong(e) {
    const foo = `/#${this.props.playingWatchId}`;
    console.log(`${foo}`)
    Router.push(foo, foo)
  }

  jumpToAlbum(e) {
    const { router } = this.props
    Router.push('/', '/', { shallow: true })
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
            <h1 onClick={this.jumpToSong.bind(this)}>{playingSong}</h1>
            <h2>{playingAlbum}</h2>
          </Grid.Column>
          <Grid.Column width={8}>
            <YouTube
              videoId={playingWatchId}
              // id={playingWatchId}
              // className="youtubevideo"
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

export default AlbumSection