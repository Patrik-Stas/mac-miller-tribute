import React, { Component } from 'react';
import {
  Grid, Table, TableBody, TableRow, TableCell,
} from 'semantic-ui-react';
import './style.scss';

class AlbumSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderSongRow = (songName, watchId, onClick, isPlaying) => {
      const rowClass = (isPlaying) ? 'active-song' : '';
      return (
        <TableRow className={rowClass} key={watchId} id={watchId}>
          <TableCell style={{cursor:"pointer"}} key={`${songName}-table-cell`}
                     onClick={() => onClick(watchId)
                     }
          >
            <h5>{songName}</h5>
          </TableCell>
        </TableRow>
      );
    };

    this.renderSongList = (songs, album, year, onClick, nowPlayingWatchId) => {

      return (
        <Table className="very selectable basic table" style={{ border: 0 }}>
          <TableBody> {
            songs.map(song => this.renderSongRow(song.song_name, song.watchid, onClick, song.watchid === nowPlayingWatchId),
            )}
          </TableBody>
        </Table>
      );
    };
  }

  render() {
    const {
      songList,
      backImg,
      sideImg,
      album,
      year,
      handleSongClick,
      cite,
      loadedWatchId,
    } = this.props;

    if (songList === undefined) {
      throw Error(`${JSON.stringify(this.props)}`);
    }


    const quote = (!!cite && !!cite.qoute && !!cite.qoute.line1) ? [
      <Grid.Row>
        <Grid.Column className="album-quote">
          {cite.qoute.line1}<br/>
          {cite.qoute.line2}<br/>
          {cite.qoute.line3}<br/>
          {cite.qoute.line4}<br/>
          {(cite.qoute.line5) ? (cite.qoute.line5) : <span/>}
        </Grid.Column>
      </Grid.Row>,
      <Grid.Row textAlign='left'>
        <Grid.Column floated='right' width={5} className="album-quote-source">
          {cite.source}
        </Grid.Column>
      </Grid.Row>,

    ] : <span></span>;
    const songGrid = (

      <Grid.Column textAlign='center' width={8} style={{marginTop:"2.5em"}}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              {(!!sideImg) && <img src={sideImg} className="album-image" alt="mac_logo"/>}
            </Grid.Column>
          </Grid.Row>
          {quote}
        </Grid>
      </Grid.Column>
    );

    const imageGrid = (
      <Grid.Column width={8}>
        {this.renderSongList(songList, album, year, handleSongClick, loadedWatchId)}
      </Grid.Column>
    );
    const gridContent = [imageGrid, songGrid];

    return (
      <div> {
        (!!backImg) && <div className='album-area' style={{ backgroundImage: `url(${backImg})` }}/>}

        <Grid className='album-content' style={{marginTop:"2em", marginBottom:"2em", marginLeft:"1em"}}>
          <Grid.Row>{gridContent}</Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AlbumSection;
