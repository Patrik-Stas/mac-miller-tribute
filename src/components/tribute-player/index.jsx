import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

const opts = {
  height: '180',
  width: '240',
};

class AlbumSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { watchId, name, album, year } = this.props;
    const {
      playingWatchId,
      playingAlbum,
      playingSong,
      playingReleaseYear,
    } = this.props;
    return (
      <div
        id="playsection"
        style={{
          marginTop: 20,
          marginBottom: 20,
          // backgroundColor: 'lightgray',
          padding: 20,
        }}
      >
        <div>
          <YouTube
            videoId={playingWatchId}
            id={playingWatchId}
            className="youtubevideo"
            containerClassName="videocontainerclass"
            opts={opts}
            // onReady={func}
            // onPlay={func}
            // onPause={func}
            // onEnd={func}
            // onError={func}
            // onStateChange={func}
            // onPlaybackRateChange={func}
            // onPlaybackQualityChange={func}
          />
        </div>
        <div id="metadata">
          <h1>{playingAlbum}</h1>
          <h2>{playingSong}</h2>
          <h3>{playingReleaseYear}</h3>
        </div>
      </div>
    );
  }
}

AlbumSection.propTypes = {
  playingWatchId: PropTypes.string,
  playingAlbum: PropTypes.string,
  playingSong: PropTypes.string,
  playingReleaseYear: PropTypes.string,
};

export default AlbumSection;
