import React, { Component } from 'react';
import {
  Grid, Table, TableBody, TableRow, TableCell,
} from 'semantic-ui-react';
import './style.scss';

class AlbumSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderSongList = (songs, album, year, onSongClick) => {
      console.log(`Rendering songs; ${JSON.stringify(songs.length)}`);
      return (
        <Table className="very selectable basic table" style={{ border: 0 }}>
          <TableBody>
            {songs.map(song => (
              <TableRow key={song.song_name}>
                <TableCell key={`cell-${song.song_name}`}
                  onClick={() => onSongClick(song.watchid, album, song.song_name, year)
                  }
                >
                  <h5>{song.song_name}</h5>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    };
  }

  render() {
    const {
      songList,
      sectionImg,
      songsOnLeft,
      album,
      year,
      handleSongClick,
    } = this.props;

    if (songList === undefined) {
      throw Error(`${JSON.stringify(this.props)}`)
    }

    const songGrid = (
      <Grid.Column width={8} textAlign='center'   style={{top: "10%"}}>
        <img src={sectionImg} className="album-image" alt="mac_logo" />
      </Grid.Column>
    );

    const imageGrid = (
      <Grid.Column width={8}>
        {this.renderSongList(songList, album, year, handleSongClick)}
      </Grid.Column>
    );
    const gridContent = songsOnLeft
      ? [imageGrid, songGrid]
      : [songGrid, imageGrid];

    return (
      <div>
        <div className='album-area' style={{backgroundImage:`url(${sectionImg})`}}>
        </div>
      <Grid className='album-content'>
        <Grid.Row>{gridContent}</Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default AlbumSection;
