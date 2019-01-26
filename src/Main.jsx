import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import AlbumSection from './components/album-section';
import './main.css';
import TributePlayer from './components/tribute-player';

// const imgMacMain = require('images/MacMain.jpg');
const imgBde = require('images/bde.jpg');
const imgSingles = require('images/singles.png');
const imgBlueslidepark = require('images/blueslidepark.jpg');
const imgDelusionalthomas = require('images/delusionalthomas.jpg');
const imgDivine = require('images/divine.jpg');
const imgFaces = require('images/faces.jpg');
const imgFromspace = require('images/fromspace.jpg');
const imgGoodam = require('images/goodam.jpg');
const imgHighlife = require('images/highlife.png');
const imgIlovelife = require('images/ilovelife.png');
const imgJukebox = require('images/jukebox.jpg');
const imgKids = require('images/kids.jpg');
const imgMacadelic = require('images/macadelic.jpg');
const imgMacin = require('images/macin.jpg');
const imgOnandon = require('images/onandon.jpg');
const imgSoundoff = require('images/soundoff.jpg');
const imgSwimming = require('images/swimming.jpg');
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingWatchId: '3ADKdqcdNqs',
      playingAlbum: '-',
      playingSong: '-',
      playingReleaseYear: '-',
    };
  }

  setPlayerSong = (
    playingWatchId,
    playingAlbum,
    playingSong,
    playingReleaseYear,
  ) => {
    this.setState({ playingWatchId });
    this.setState({ playingAlbum });
    this.setState({ playingSong });
    this.setState({ playingReleaseYear: playingReleaseYear || 'Unknown' });
  };

  renderSection = (albumId, index) => {
    const sectionImg = albums[albumId][0];
    return (
      <Grid.Row key={`${albumId}-row`} style={{ minHeight: 400 }}>
        <AlbumSection
          key={`${albumId}-album`}
          sectionImg={sectionImg}
          album={art[albumId].name}
          year={art[albumId].release_year}
          songList={art[albumId].content}
          songsOnLeft={index % 2 === 0}
          type={art[albumId].type}
          handleSongClick={this.setPlayerSong}
        />
      </Grid.Row>
    );
  }

  render() {
    const {
      playingWatchId,
      playingAlbum,
      playingSong,
      playingReleaseYear,
    } = this.state;
    const albumSections = (
      <div>
        <div className="headertext" style={{ fontSize: 50, marginBottom: 20 }}>
          <p>The tribute to Malcolm James McCormick</p>
        </div>
        <TributePlayer
          playingWatchId={playingWatchId}
          playingAlbum={playingAlbum}
          playingSong={playingSong}
          playingReleaseYear={playingReleaseYear}
        />
        <Grid>
          {Object.keys(albums).map((k, i) => this.renderSection(k, i))}
        </Grid>
      </div>
    );

    return <div>{albumSections}</div>;
  }
}

export default Main;
