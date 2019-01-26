import React, { Component } from 'react';
import '../scss/style.scss';
import AlbumSection from './components/album-section';
import TributePlayer from './components/tribute-player';
import { Divider, Grid } from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';

// const imgMacMain = require('images/MacMain.jpg');
const imgBde = '/static/images/bde.jpg';
const imgSingles = '/static/images/singles.png';
const imgBlueslidepark = '/static/images/blueslidepark.jpg';
const imgDelusionalthomas = '/static/images/delusionalthomas.jpg';
const imgDivine = '/static/images/divine.jpg';
const imgFaces = '/static/images/faces.jpg';
const imgFromspace = '/static/images/fromspace.jpg';
const imgGoodam = '/static/images/goodam.jpg';
const imgHighlife = '/static/images/highlife.png';
const imgIlovelife = '/static/images/ilovelife.png';
const imgJukebox = '/static/images/jukebox.jpg';
const imgKids = '/static/images/kids.jpg';
const imgMacadelic = '/static/images/macadelic.jpg';
const imgMacin = '/static/images/macin.jpg';
const imgOnandon = '/static/images/onandon.jpg';
const imgSoundoff = '/static/images/soundoff.jpg';
const imgSwimming = '/static/images/swimming.jpg';
const art = require('./data/art.json');


const albums = {
  singles: [imgSingles],
  swimming: [imgSwimming],
  divine: [imgDivine],
  goodam: [imgGoodam],
  faces: [imgFaces],
  livefromspace: [imgFromspace],
  delusional: [imgDelusionalthomas],
  watchingmovies: [imgSoundoff],
  macadelic: [imgMacadelic],
  blueslidepark: [imgBlueslidepark],
  ilovelife: [imgIlovelife],
  onandon: [imgOnandon],
  bde: [imgBde],
  kids: [imgKids],
  highlife: [imgHighlife],
  classclown: [imgJukebox],
  mackin: [imgMacin],
};

const playbarHeight = 150;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWatchId: '3ADKdqcdNqs',
      loadedWatchId: '3ADKdqcdNqs',
      playingAlbum: '-',
      playingSong: '-',
      playingReleaseYear: '-',
      playerTarget: null,
    };
  }

  // playSong = (watchId) => {
  //   this.state.playerTarget.playVideo()
  // };

  setPlayerSong = (
    targetWatchId,
    playingAlbum,
    playingSong,
    playingReleaseYear,
  ) => {
    this.setState({ targetWatchId });
    this.setState({ playingAlbum });
    this.setState({ playingSong });
    this.setState({ playingReleaseYear });
  };

  renderSection = (albumId, index) => {
    const sectionImg = albums[albumId][0];

    if (art[albumId].content === undefined) {
      throw Error(`${JSON.stringify(albumId)}`)
    }
    return (
      <Grid.Row key={`${albumId}-row`} style={{ minHeight: 400, marginBottom: '4em' }}>
        <Grid.Column width={16} style={{ marginBottom: '3em' }}>
          <h1 style={{ fontSize: '3rem'}}>{art[albumId].name}</h1>
        </Grid.Column>
        <Grid.Column width={16}>
          <AlbumSection
            key={`${albumId}-album`}
            sectionImg={sectionImg}
            album={art[albumId].name}
            year={art[albumId].release_year}
            songList={art[albumId].content}
            songsOnLeft={true}
            type={art[albumId].type}
            handleSongClick={this.setPlayerSong}
          />
        </Grid.Column>
      </Grid.Row>
    );
  };

  onReady = (event) => {
    var embedCode = event.target.getVideoEmbedCode();

    // event.target.playVideo();
    // this.setState({playerTarget:event.target});
    // console.log(`Player ready ${JSON.stringify(this.state.playerTarget)}`);
    // if (document.getElementById('embed-code')) {
    //   document.getElementById('embed-code').innerHTML = embedCode;
    // }
  };


  onSongChanged(event) {
    console.log(`EVENT: Song was changed!`);
    event.target.playVideo();
  }

  onStateChange = (event) => {
    // var embedCode = event.target.getVideoEmbedCode();
    // event.target.playVideo();
    // this.setState({playerTarget:event.target});
    try {
      const videoUrl = event.target.getVideoUrl();
      console.log(`Video URL: ${videoUrl}`);
      const newWatchId = /v=(\w*)/.exec(videoUrl)[1];
      console.log(`WatchId of url ${videoUrl} is = ${JSON.stringify(newWatchId)}`);
      console.log(`targetWatchId = ${this.state.targetWatchId}`);
      console.log(`loadedWatchId = ${this.state.loadedWatchId}`);
      if (!newWatchId) {
        console.error(`Couldn't find watchId in URL.`);
      } else {
        if (this.state.loadedWatchId !== newWatchId) {
          console.log(`ESong was changed! From ${this.state.loadedWatchId} tot ${newWatchId}`);
          this.setState({ loadedWatchId: newWatchId });
          this.onSongChanged(event);
        }
      }
    } catch (err) {
      console.error(`Something got messaged up when player state changed. Even processed:`);
      console.error(event);
      console.error(err);
    }
    // console.log(`Player ready ${JSON.stringify(this.state.playerTarget)}`);
    // if (document.getElementById('embed-code')) {
    //   document.getElementById('embed-code').innerHTML = embedCode;
    // }
  };


  render() {
    const {
      playingAlbum,
      playingSong,
      playingReleaseYear,
      targetWatchId,
    } = this.state;
    const albumSections = (
      <StickyContainer>
        <Grid>
          <Grid.Row style={{minHeight:playbarHeight*1.2}}>
          </Grid.Row>
          {Object.keys(albums).map((k, i) => this.renderSection(k, i))}
        </Grid>

        <Sticky>{({ style }) =>
          <div style={style}>
            <TributePlayer
              height={playbarHeight}
              playingWatchId={targetWatchId}
              playingAlbum={playingAlbum}
              playingSong={playingSong}
              playingReleaseYear={playingReleaseYear}
              onReady={this.onReady}
              // onPlay={this.onPlay}
              // onPause={this.onPause}
              // onEnd={sthis.onEnd}
              // onError={this.onError}
              onStateChange={this.onStateChange}
              // onPlaybackRateChange={this.onPlaybackRateChange}
              // onPlaybackQualityChange={this.onPlaybackQualityChange}
            />
            <Divider/>
          </div>
        }</Sticky>
      </StickyContainer>
    );

    return <div>{albumSections}</div>;
  }
}

export default Main;
