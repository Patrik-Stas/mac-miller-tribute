import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import AlbumSection from './components/AlbumSection';

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

function renderSection(albumId, index) {
  const sectionImg = albums[albumId][0];
  return (
    <Grid.Row key={`${albumId}-row`} style={{ minHeight: 400 }}>
      <AlbumSection
        key={`${albumId}-album`}
        sectionImg={sectionImg}
        title={art[albumId].name}
        songList={art[albumId].content}
        songsOnLeft={index % 2 === 0}
      />
    </Grid.Row>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const albumSections = (
      <Grid>{Object.keys(albums).map((k, i) => renderSection(k, i))}</Grid>
    );

    return <div>{albumSections}</div>;
  }
}

export default Main;
