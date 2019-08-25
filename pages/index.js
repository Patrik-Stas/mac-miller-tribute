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
const imgUnreleased = '/static/images/unreleased.jpg';
const mac2018 = '/static/images/mac2018.jpg';
const mac2017= '/static/images/mac2017.jpg';
const mac2016= '/static/images/mac2016.jpg';
const mac2015= '/static/images/mac2015.jpg';
const mac2014= '/static/images/mac2014.jpg';
const mac2013= '/static/images/mac2013.png';
const mac2012= '/static/images/mac2012.jpg';
const mac2011= '/static/images/mac2011.jpg';
const mac2010= '/static/images/mac2010.jpg';
const runonsentences1= '/static/images/runonsentences1.jpg';
const blackfriday= '/static/images/blackfriday.jpg';
const piffsburgh= '/static/images/piffsburgh.jpg';
const you= '/static/images/you.jpg';
const art = require('./data/art.json');


const albums = {
  unreleased:
    {
      sidePic: null,
      backPic: imgUnreleased,
    },
  swimming:
    {
      sidePic: imgSwimming,
      backPic: imgSwimming,
    },
  selections2018:
    {
      sidePic: null,
      backPic: mac2018,
    },
  selections2017:
    {
      sidePic: null,
      backPic: mac2017,
    },
  divine:
    {
      sidePic: imgDivine,
      backPic: imgDivine,
    },
  selections2016:
    {
      sidePic: null,
      backPic: mac2016,
    },
  goodam:
    {
      sidePic: imgGoodam,
      backPic: imgGoodam,
    },
  selections2015:
    {
      sidePic: null,
      backPic: mac2015,
    },
  faces:
    {
      sidePic: imgFaces,
      backPic: imgFaces,
    },
  selections2014:
    {
      sidePic: null,
      backPic: mac2014,
    },
  livefromspace:
    {
      sidePic: imgFromspace,
      backPic: imgFromspace,
    },
  delusional:
    {
      sidePic: imgDelusionalthomas,
      backPic: imgDelusionalthomas,
    },
  watchingmovies:
    {
      sidePic: imgSoundoff,
      backPic: imgSoundoff,
    },
  selections2013:
    {
      sidePic: null,
      backPic: mac2013,
    },
  macadelic:
    {
      sidePic: imgMacadelic,
      backPic: imgMacadelic,
    },
  runonsentences1:
    {
      sidePic: runonsentences1,
      backPic: runonsentences1,
    },
  you:
    {
      sidePic: you,
      backPic: you,
    },
  selections2012:
    {
      sidePic: null,
      backPic: mac2012,
    },
  blueslidepark:
    {
      sidePic: imgBlueslidepark,
      backPic: imgBlueslidepark,
    },
  ilovelife:
    {
      sidePic: imgIlovelife,
      backPic: imgIlovelife,
    },
  onandon:
    {
      sidePic: imgOnandon,
      backPic: imgOnandon,
    },
  blackfriday:
    {
      sidePic: blackfriday,
      backPic: blackfriday,
    },
  bde:
    {
      sidePic: imgBde,
      backPic: imgBde,
    },
  piffsburg:
    {
      sidePic: piffsburgh,
      backPic: piffsburgh,
    },
  selections2011:
    {
      sidePic: null,
      backPic: mac2011,
    },
  kids:
    {
      sidePic: imgKids,
      backPic: imgKids,
    },
  selections2010:
    {
      sidePic: null,
      backPic: mac2010,
    },
  highlife:
    {
      sidePic: imgHighlife,
      backPic: imgHighlife,
    },
  classclown:
    {
      sidePic: imgJukebox,
      backPic: imgJukebox,
    },
  mackin:
    {
      sidePic: imgMacin,
      backPic: imgMacin,
    },

};

function orderWatchIds() {
  let ids = [];
  const keys = Object.keys(albums);
  for (let a = 0; a < keys.length; a++) {
    const album = art[keys[a]];
    console.log(`Preprocessing IDs for album ${keys[a]}`);
    for (let i = 0; i < album.content.length; i++) {
      const song = album.content[i];
      ids.push(song.watchid);
    }
  }
  return ids;
}


const orderedWatchIds = orderWatchIds();


function getNextWatchId(watchId) {
  const i = orderedWatchIds.findIndex((id) => id === watchId);
  const targetIndex = (i + 1 < orderedWatchIds.length) ? i + 1 : orderedWatchIds.length - 1;
  return orderedWatchIds[targetIndex];
}


function getPrevWatchId(watchId) {
  const i = orderedWatchIds.findIndex((id) => id === watchId);
  const targetIndex = (i - 1 >= 0) ? i - 1 : 0;
  return orderedWatchIds[targetIndex];
}


const playbarHeight = 130;

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
      isPlayingNow: false
    };

  }

  findDetailsByWatchId(searchWatchId) {
    const keys = Object.keys(art);
    for (let a = 0; a < keys.length; a++) {
      const album = art[keys[a]];
      for (let i = 0; i < album.content.length; i++) {
        if (album.content[i].watchid === searchWatchId) {
          return { albumName: album.name, songName: album.content[i].song_name };
        }
      }
    }
    throw Error(`Couldn't find album where WatchID ${searchWatchId} belongs.`);
  }


  playNext = () => {
    const watchId = getNextWatchId(this.state.loadedWatchId);
    console.log(`Playing next song, watchId: ${watchId}`);
    this.setPlayerSong(watchId);
  };


  playPrev = () => {
    const watchId = getPrevWatchId(this.state.loadedWatchId);
    console.log(`Playing previous song, watchId: ${watchId}`);
    this.setPlayerSong(watchId);
  };

  handleArrowKeys(event) {
    switch (event.key) {
      case 'ArrowLeft': {
        this.playPrev();
        event.preventDefault();
        break;
      }
      case 'ArrowRight': {
        this.playNext();
        event.preventDefault();
        break;
      }

      case 'ArrowUp': {
        this.playPrev();
        event.preventDefault();
        break;
      }

      case 'ArrowDown': {
        this.playNext();
        event.preventDefault();
        break;
      }

      case ' ': {
        if (this.state.isPlayingNow) {
          this.onStopButtonClick()
        } else {
          this.onPlayButtonClick()
        }
        event.preventDefault();
        break;
      }
    }
  }

  setPlayerSong = (
    targetWatchId,
    autoplay = true,
  ) => {
    console.log(`Setting player target song to ${targetWatchId}`);
    this.setState({ targetWatchId });
    try {
      const detail = this.findDetailsByWatchId(targetWatchId);
      console.log(`Found watchId details: ${JSON.stringify(detail)}`);
      this.setState({ playingAlbum: detail.albumName });
      this.setState({ playingSong: detail.songName });
      this.setState({ autoplay });
    } catch (err) {
      console.error(`Couldn't setup details for watchid ${targetWatchId}`);
      console.error(err);
      this.setState({ playingAlbum: '-' });
      this.setState({ playingSong: '-' });
    }
  };


  onReady = (event) => {
    var embedCode = event.target.getVideoEmbedCode();

    // event.target.playVideo();
    this.setState({playerTarget:event.target});
    // console.log(`Player ready ${JSON.stringify(this.state.playerTarget)}`);
    // if (document.getElementById('embed-code')) {
    //   document.getElementById('embed-code').innerHTML = embedCode;
    // }
  };

  onPrevButtonClick = () => {
    this.playPrev()
  };

  onPlayButtonClick = () => {
    this.state.playerTarget.playVideo()
  };

  onStopButtonClick = () => {
    this.state.playerTarget.pauseVideo()
  };

  onNextButtonClick = () => {
    this.playNext()
  };

  onSongChanged(event) {
    if (this.state.autoplay) {
      event.target.playVideo();
    }
  }

  getRandomAlbumKey = () => {
    const albumKeys = Object.keys(albums);
    const index = Math.floor(Math.random() * albumKeys.length);
    return albumKeys[index];
  };

  getRandomWatchId = () => {
    const albumKey = this.getRandomAlbumKey();
    const album = art[albumKey];
    const songs = album.content;
    const song = songs[Math.floor(Math.random() * songs.length)];
    return song.watchid;
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrowKeys.bind(this), false);
    const watchid = this.getRandomWatchId();
    this.setPlayerSong(watchid, false);
  };


  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrowKeys.bind(this), false);
  }

  onEnd = (event) => {
    this.playPrev();
  };

  onStateChange = (event) => {
    console.log(`STATE CHANGE!!!`);
    console.log(event);
    console.log(event.target.getPlayerState());
    if (event.target.getPlayerState() <= 0 || event.target.getPlayerState() === 2 || event.target.getPlayerState() === 5) {
      this.setState({isPlayingNow:false})
    } else {
      this.setState({isPlayingNow:true})
    }
    try {
      const videoUrl = event.target.getVideoUrl();
      console.log(`Video URL: ${videoUrl}`);
      const newWatchId = /v=([\w|\-|_]*)/.exec(videoUrl)[1];
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
  };

  renderSection = (albumId, index) => {
    const backImg = albums[albumId]['backPic'];
    const sideImg = albums[albumId]['sidePic'];

    if (art[albumId].content === undefined) {
      throw Error(`${JSON.stringify(albumId)}`);
    }
    return [
      <Grid.Row key={`${albumId}-name`} style={{ marginTop: '0em' }}>
        <Grid.Column width={1}>
          <h3 style={{ fontSize: '2rem' }}>{art[albumId].release_year}</h3>
        </Grid.Column>
        <Grid.Column style={{ marginLeft: '1rem' }} width={13}>
          <h1 style={{ fontSize: '3rem' }}>{art[albumId].name}</h1>
        </Grid.Column>

      </Grid.Row>,

      <Grid.Row key={`${albumId}-row`} style={{ minHeight: 500, marginBottom: '7em' }}>
        <Grid.Column width={16}>
          <AlbumSection
            key={`${albumId}-album`}
            backImg={backImg}
            sideImg={sideImg}
            album={art[albumId].name}
            year={art[albumId].release_year}
            songList={art[albumId].content}
            songsOnLeft={true}
            type={art[albumId].type}
            cite={art[albumId].cite}
            loadedWatchId={this.state.loadedWatchId}
            handleSongClick={this.setPlayerSong}
          />
        </Grid.Column>
      </Grid.Row>,
    ];
  };

  render() {
    const {
      playingAlbum,
      playingSong,
      playingReleaseYear,
      targetWatchId,
    } = this.state;
    const albumSections = (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ marginTop: '4em' }}>
              <h1 style={{ fontSize: '4em' }}>Tribute to Mac Miller</h1>
              <h2 style={{}}>The complete discography</h2>
              <Divider style={{ marginBottom: '2em' }}/>
            </Grid.Column>
          </Grid.Row>
          {Object.keys(albums).map((k, i) => this.renderSection(k, i))}
          <Grid.Row>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ fontSize: '1.1em' }}>
            <Grid.Column width={8} floated='left' textAlign='left'>
              <h5>Created by fan <a href="http://patrikstas.com/">Patrik Staš</a>.</h5>
            </Grid.Column>
            <Grid.Column width={8} floated='right' textAlign='center'>
              <h5>Support this project by downloading and using new revolutionary web-browser</h5>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: '1em' }}>
            <Grid.Column width={8} floated='right' textAlign='center'>
              <a href="https://brave.com/mac042"><img style={{ height: '3em' }}
                                                      src='/static/brave-bat-partnership.png'/></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <div className='player-section'>
          <TributePlayer
            height={playbarHeight}
            playingWatchId={targetWatchId}
            playingAlbum={playingAlbum}
            playingSong={playingSong}
            playingReleaseYear={playingReleaseYear}
            onReady={this.onReady}
            isPlayingNow={this.state.isPlayingNow}
            onPrevButtonClick={this.onPrevButtonClick}
            onPlayButtonClick={this.onPlayButtonClick}
            onStopButtonClick={this.onStopButtonClick}
            onNextButtonClick={this.onNextButtonClick}
            // onPlay={this.onPlay}
            // onPause={this.onPause}
            onEnd={this.onEnd}
            // onError={this.onError}
            onStateChange={this.onStateChange}
            // onPlaybackRateChange={this.onPlaybackRateChange}
            // onPlaybackQualityChange={this.onPlaybackQualityChange}
          />
        </div>
      </div>
    );

    return <div>{albumSections}</div>;
  }
}

export default Main;
